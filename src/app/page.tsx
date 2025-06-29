"use client";

import { EntryPoint, EntryPointSize, EntryPointType } from "@thinkflagship/web-shorts";

export default function Home() {
  return (
    <div className="container py-10">
      <h1 className="text-2xl font-bold">Hello World</h1>
      <section className="py-10">
        <EntryPoint
          id={"#914686"}
          skeletonType={EntryPointType.RECTANGLE}
          skeletonSize={EntryPointSize.STANDARD}
        />
      </section>
    </div>
  );
}
