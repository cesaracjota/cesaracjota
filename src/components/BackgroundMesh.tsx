export default function BackgroundMesh() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Very subtle navy gradient blobs — NOT neon, NOT distracting */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#0f172a]" />
      <div className="absolute -top-[30%] -right-[20%] w-[70vw] h-[70vw] rounded-full bg-sky-900/20 filter blur-[150px]" />
      <div className="absolute -bottom-[30%] -left-[20%] w-[60vw] h-[60vw] rounded-full bg-indigo-900/15 filter blur-[150px]" />
      
      {/* Very faint grid texture — data science feel */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundSize: '40px 40px',
          backgroundImage: 'linear-gradient(rgba(148, 163, 184, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.5) 1px, transparent 1px)'
        }}
      />
    </div>
  );
}
