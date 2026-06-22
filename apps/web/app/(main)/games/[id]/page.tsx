import React from 'react';

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function GameDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Game Details</h1>
      <p className="text-gray-500 mt-2">Viewing details for game ID: {resolvedParams.id}</p>
    </div>
  );
}
