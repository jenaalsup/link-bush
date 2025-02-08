'use client';

import { useEffect, useState } from 'react';
import { supabase } from '../utils/supabaseClient';

type Link = {
  id: number;
  url: string;
  created_at: string;
};

export default function Home() {
  const [data, setData] = useState<Link[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('Links')
        .select('*');
      if (error) console.error(error);
      else setData(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Link Bush</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}