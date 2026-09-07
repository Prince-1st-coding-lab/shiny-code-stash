ALTER TABLE public.products
  ADD COLUMN IF NOT EXISTS size text NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS material text NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS placement text NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS parent_id uuid REFERENCES public.products(id) ON DELETE CASCADE;

CREATE INDEX IF NOT EXISTS products_parent_id_idx ON public.products (parent_id);