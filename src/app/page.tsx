'use client'

import { Task } from '@/core/models';
import React, { useEffect, useState } from 'react';

export default function Home() {
  const [tasks, setTasks] = useState<Task[] | undefined>(undefined);

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await fetch('/api/get-tasks');
      const js = await res.json();
      console.log("GOT IT : ", js)
      setTasks(js.tasks);
    };

    fetchTasks().catch(
      (err) => console.log("error fetching tasks", err)
    );

  }, []);



  return (
    <div>
      <p className="underline pb-2">TODO :</p>
      {(tasks || []).map(t => (
        <p key={t.txt}>* {t.txt}</p>
      ))}
    </div>
  );
}
