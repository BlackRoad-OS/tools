/**
 * BlackRoad Tools Registry
 * Universal integration hub for the BlackRoad OS ecosystem
 * 
 * Connects 15 organizations and 315+ repositories
 */

export interface Env {
  TOOLS_REGISTRY?: KVNamespace; // Optional until KV namespace is created
  CONTINUITY: D1Database;
  ENVIRONMENT: string;
  VERSION: string;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const path = url.pathname;

    // CORS headers for cross-origin requests
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, X-Agent-ID, X-Org-Name, Authorization',
      'Content-Type': 'application/json',
    };

    // Handle OPTIONS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    try {
      // Root endpoint - Health check & info
      if (path === '/' || path === '/health') {
        return new Response(JSON.stringify({
          service: 'BlackRoad Tools Registry',
          status: 'healthy',
          version: env.VERSION || '1.0.0',
          environment: env.ENVIRONMENT || 'production',
          ecosystem: {
            organizations: 15,
            repositories: '315+',
            workers: 82,
            databases: 11,
            domains: 21,
          },
          endpoints: [
            'GET / - Service info',
            'GET /health - Health check',
            'GET /registry - List all tools',
            'GET /orgs - List organizations',
            'GET /repos/:org - List repos by org',
            'GET /integrations/index - Sync with master index',
          ],
          links: {
            index: 'https://github.com/BlackRoad-OS/index',
            docs: 'https://github.com/BlackRoad-OS/blackroad-docs',
            website: 'https://blackroad.io',
          },
          timestamp: new Date().toISOString(),
        }, null, 2), {
          headers: corsHeaders,
        });
      }

      // Registry endpoint - List all registered tools
      if (path === '/registry') {
        const tools = await getRegisteredTools(env);
        return new Response(JSON.stringify({
          total: tools.length,
          tools,
        }, null, 2), {
          headers: corsHeaders,
        });
      }

      // Organizations endpoint
      if (path === '/orgs') {
        const orgs = getOrganizations();
        return new Response(JSON.stringify({
          total: orgs.length,
          organizations: orgs,
        }, null, 2), {
          headers: corsHeaders,
        });
      }

      // Repos by organization
      if (path.startsWith('/repos/')) {
        const orgName = path.split('/')[2];
        const repos = await getReposByOrg(orgName, env);
        return new Response(JSON.stringify({
          organization: orgName,
          total: repos.length,
          repositories: repos,
        }, null, 2), {
          headers: corsHeaders,
        });
      }

      // Integration: Master index sync
      if (path === '/integrations/index') {
        return new Response(JSON.stringify({
          index: 'https://github.com/BlackRoad-OS/index',
          json: 'https://raw.githubusercontent.com/BlackRoad-OS/index/main/index.json',
          infrastructure: 'https://raw.githubusercontent.com/BlackRoad-OS/index/main/infrastructure.json',
          internet_map: 'https://github.com/BlackRoad-OS/index/blob/main/INTERNET.md',
          claude_guide: 'https://github.com/BlackRoad-OS/index/blob/main/CLAUDE.md',
        }, null, 2), {
          headers: corsHeaders,
        });
      }

      // 404 - Not found
      return new Response(JSON.stringify({
        error: 'Not Found',
        path,
        message: 'See GET / for available endpoints',
      }, null, 2), {
        status: 404,
        headers: corsHeaders,
      });

    } catch (error) {
      console.error('Error:', error);
      return new Response(JSON.stringify({
        error: 'Internal Server Error',
        message: error instanceof Error ? error.message : 'Unknown error',
      }, null, 2), {
        status: 500,
        headers: corsHeaders,
      });
    }
  },
};

/**
 * Get all registered tools from KV storage
 * 
 * Future enhancement: When KV namespace is created, tools can be dynamically
 * registered and persisted. For now, returns statically defined core tools.
 */
async function getRegisteredTools(env: Env): Promise<any[]> {
  // Future: Check env.TOOLS_REGISTRY for dynamically registered tools
  // if (env.TOOLS_REGISTRY) {
  //   const registered = await env.TOOLS_REGISTRY.get('tools', 'json');
  //   if (registered) return registered;
  // }
  
  // Return core tools from the BlackRoad ecosystem
  return [
    {
      name: 'blackroad-tools',
      type: 'api',
      url: 'https://github.com/BlackRoad-OS/blackroad-tools',
      description: 'Agent orchestration, memory, reasoning, coordination API',
      organization: 'BlackRoad-OS',
      capabilities: ['agent-management', 'memory', 'reasoning', 'coordination'],
    },
    {
      name: 'blackroad-os-beacon',
      type: 'service',
      url: 'https://github.com/BlackRoad-OS/blackroad-os-beacon',
      description: 'Service discovery & health monitoring beacon',
      organization: 'BlackRoad-OS',
      capabilities: ['discovery', 'monitoring', 'health-check'],
    },
    {
      name: 'blackroad-os-mesh',
      type: 'service',
      url: 'https://github.com/BlackRoad-OS/blackroad-os-mesh',
      description: 'Real-time agent communication mesh',
      organization: 'BlackRoad-OS',
      capabilities: ['websocket', 'realtime', 'messaging'],
    },
    {
      name: 'tools',
      type: 'registry',
      url: 'https://github.com/BlackRoad-OS/tools',
      description: 'Universal tools registry and ecosystem integration hub',
      organization: 'BlackRoad-OS',
      capabilities: ['registry', 'integration', 'coordination'],
    },
  ];
}

/**
 * Get all BlackRoad organizations
 */
function getOrganizations() {
  return [
    { name: 'BlackRoad-OS', repos: 100, focus: 'Core infrastructure', url: 'https://github.com/BlackRoad-OS' },
    { name: 'BlackRoad-AI', repos: 52, focus: 'AI models & tools', url: 'https://github.com/BlackRoad-AI' },
    { name: 'BlackRoad-Cloud', repos: 20, focus: 'Cloud infrastructure', url: 'https://github.com/BlackRoad-Cloud' },
    { name: 'BlackRoad-Security', repos: 17, focus: 'Security tools', url: 'https://github.com/BlackRoad-Security' },
    { name: 'BlackRoad-Media', repos: 17, focus: 'Media platforms', url: 'https://github.com/BlackRoad-Media' },
    { name: 'BlackRoad-Foundation', repos: 15, focus: 'Core tools', url: 'https://github.com/BlackRoad-Foundation' },
    { name: 'BlackRoad-Interactive', repos: 14, focus: 'Gaming', url: 'https://github.com/BlackRoad-Interactive' },
    { name: 'BlackRoad-Labs', repos: 13, focus: 'R&D', url: 'https://github.com/BlackRoad-Labs' },
    { name: 'BlackRoad-Hardware', repos: 13, focus: 'IoT & devices', url: 'https://github.com/BlackRoad-Hardware' },
    { name: 'BlackRoad-Studio', repos: 13, focus: 'Creative tools', url: 'https://github.com/BlackRoad-Studio' },
    { name: 'BlackRoad-Ventures', repos: 12, focus: 'Business tools', url: 'https://github.com/BlackRoad-Ventures' },
    { name: 'BlackRoad-Education', repos: 11, focus: 'Learning', url: 'https://github.com/BlackRoad-Education' },
    { name: 'BlackRoad-Gov', repos: 10, focus: 'Governance', url: 'https://github.com/BlackRoad-Gov' },
    { name: 'Blackbox-Enterprises', repos: 9, focus: 'Stealth R&D', url: 'https://github.com/Blackbox-Enterprises' },
    { name: 'BlackRoad-Archive', repos: 9, focus: 'Data preservation', url: 'https://github.com/BlackRoad-Archive' },
  ];
}

/**
 * Get repositories by organization
 * 
 * Future enhancement: Integrate with GitHub API or fetch from index.json at
 * https://raw.githubusercontent.com/BlackRoad-OS/index/main/index.json
 * 
 * Current implementation returns organization summary. For detailed repository
 * listings, users should query the GitHub API directly or visit the index repo.
 */
async function getReposByOrg(orgName: string, env: Env): Promise<any[]> {
  const org = getOrganizations().find(o => 
    o.name.toLowerCase() === orgName.toLowerCase()
  );
  
  if (!org) {
    return [];
  }
  
  return [{
    organization: org.name,
    repo_count: org.repos,
    focus: org.focus,
    url: org.url,
    github_api: `https://api.github.com/orgs/${org.name}/repos`,
    index_json: 'https://raw.githubusercontent.com/BlackRoad-OS/index/main/index.json',
    note: 'For full repository listings, query GitHub API or fetch index.json',
  }];
}
