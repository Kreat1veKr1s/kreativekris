-- Add email format constraint to subscribers table
ALTER TABLE public.subscribers ADD CONSTRAINT email_format CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$');

-- Add max length constraint
ALTER TABLE public.subscribers ADD CONSTRAINT email_max_length CHECK (length(email) <= 255);