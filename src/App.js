import React from 'react'; 
import './style.css'; 
import Header from './Header'
import Footer from './Footer'
import Note from './Note'
import notes from './data'


const App = () => { 
      return <div>
            <Header/>
            <Footer/>
            {
                  notes.map(noteObj => { 
                        return <Note title={noteObj.title} content={noteObj.content}/>
                        
                  })
            }
      </div>
}
export default App