
-- Page views / visitor analytics table
CREATE TABLE public.page_views (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  page_path TEXT NOT NULL DEFAULT '/',
  referrer TEXT,
  user_agent TEXT,
  city TEXT,
  region TEXT,
  country TEXT,
  device_type TEXT,
  session_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS but allow anonymous inserts (public portfolio)
ALTER TABLE public.page_views ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (tracking is anonymous)
CREATE POLICY "Allow anonymous page view inserts"
  ON public.page_views FOR INSERT
  WITH CHECK (true);

-- No one can read/update/delete from client side (admin only via service role)
CREATE POLICY "No public reads"
  ON public.page_views FOR SELECT
  USING (false);

-- Index for analytics queries
CREATE INDEX idx_page_views_created_at ON public.page_views (created_at DESC);
CREATE INDEX idx_page_views_page_path ON public.page_views (page_path);
