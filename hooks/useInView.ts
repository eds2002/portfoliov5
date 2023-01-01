import React from 'react'
import {useEffect} from 'react'

export const useInView = (ref:any) => {
  useEffect(()=>{
    let observer = new IntersectionObserver(showItem, {rootMargin:'0px',threshold:0})
  
    function showItem(entries:any){
      entries.forEach((entry:any)=>{
        if(entry.isIntersecting){
          entry.target.children[0].classList.add('active')
        }
      })
    }

  
  
  
    const text = ref?.current?.querySelectorAll('p')
    text?.forEach((item:any)=>{
      observer.observe(item)
    })
  },[])
}