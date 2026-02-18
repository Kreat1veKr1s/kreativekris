
CREATE TABLE public.subscribers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.subscribers ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts
CREATE POLICY "Allow anonymous subscriber inserts"
  ON public.subscribers
  FOR INSERT
  WITH CHECK (true);

-- Block public reads
CREATE POLICY "No public reads on subscribers"
  ON public.subscribers
  FOR SELECT
  USING (false);
