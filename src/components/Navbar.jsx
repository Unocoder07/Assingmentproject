import React from 'react';
import { BiSolidSun, BiSolidMoon, } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
const NavLinks = [
    {
        id :"1",
        name: "Home",
        link:"/#"
    },
    {
        id :"2",
        name: "Cars",
        link:"/#cars"
    },
    {
        id :"3",
        name: "About",
        link:"/#about"
    },
    {
        id :"4",
        name: "Booking",
        link:"/#booking"
    },
]
const Navbar = ({theme,setTheme}) => {
    
  return (
    <nav className="shadow-md bg-white dark:bg-black dark:text-white duration-300 ">
          <div className="conatiner">
              <div className="flex justify-between items-center px-8">
                  <div>
                      <h1 className="text-3xl font-serif font-bold  hover:p-2 hover:text-4xl duration-350">Car<span className='text-yellow-400'>Z</span></h1>
                  </div>
                  <div className='flex items-center gap-5 '>
                      <div class="flex items-center gap-5 rounded-full border-black border-2 px-3 py-2 group dark:border-white" >
                          <input type="text" placeholder='Search Cars' class="w-21 dark:bg-black hidden group-hover:inline-block transition-all duration-500 focus:outline-none" />
                          <FaSearch class="font-bold text-lg"/>
                      </div>
                  <div className='hiden md:block'>
                      <ul className='flex items-center justify-between gap-8'>
                          {
                              NavLinks.map((data) => (
                                <li key={data.id}>
                                      <a className='inline-block box-border py-4 text-lg font-medium hover:text-primary hover:border-b-2 hover:pt-2
                                       duration-450 hover:border-primary transition-colors ' href={data.link}>
                                          {data.name}</a>
                          </li> 
                              ))
                          }
                          
                      </ul>
                      
                      </div>
                      <div>
                          {
                              theme == "dark" ?
                                  (<BiSolidSun onClick={() => setTheme("light")} className='text-2xl' />)
                                  : (
                                    <BiSolidMoon onClick={() => setTheme("dark")} className='text-2xl'/>
                                  )
                          }
                          
                      </div>
                    </div>
                  
              </div>
      </div>
    </nav>
  )
}

export default Navbar
