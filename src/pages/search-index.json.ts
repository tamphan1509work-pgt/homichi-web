import type { APIRoute } from 'astro';
import { buildSearchIndex } from '../data/search';

export const GET: APIRoute = () =>
  new Response(JSON.stringify(buildSearchIndex()), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
