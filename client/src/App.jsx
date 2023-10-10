import './App.css'

function App() {
  return (
    <div>
      {/* Header Component */}
      <header className='flex p-4 justify-between items-center'>
        
        {/* Logo Component */}
        <a id='logo-image' href="" className='flex items-center gap-1'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 -rotate-90">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
          </svg>
          <span className='font-bold text-xl'>Naija Football Database</span>
        </a>

        {/* Search Bar Component */}
        <div className='flex border border-gray-300 rounded-full px-4 py-2 '>
          <p>Search Active Players</p>
          <a href="">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </a>
        </div>

        {/* Menu Component */}
        <div id='menu' className='flex gap-3'>
          <div>Standings</div>
          <div>Games</div>
          <div>Stats</div>
          <div>Teams</div>
          <div>Players</div>
          <div>Draft</div>
        </div>

      </header>
    </div>
   )
}

export default App
