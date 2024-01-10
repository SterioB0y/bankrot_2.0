import React, { useEffect } from 'react';
import lArrow from "../assets/leftArrow.png"
import rArrow from "../assets/rightArrow.png"
import "../styles/pagesStyle.css"

const Pages = ({ page, pageNow, setPage }) => {

    function firstPage(p) {
        const el2 = document.getElementById("2")
        const el3 = document.getElementById("3")
        const el4 = document.getElementById("4")
        const el5 = document.getElementById("5")
        const el6 = document.getElementById("6")
        
            for (let i = 1; i < page.length; i++) {
                if (document.getElementById(i))
                    document.getElementById(i).style.display = "none"
            }
            el2.style.display = "block"
            el3.style.display = "block"
            el4.style.display = "block"
            el5.style.display = "block"
            el6.style.display = "block"
        setPage(p)
    }

    function lastPage(p) {
            const elem3 = document.getElementById(p - 5)
            const elem4 = document.getElementById(p - 4)
            const elem5 = document.getElementById(p - 3)
            const elem6 = document.getElementById(p - 2)
            const elem7 = document.getElementById(p - 1)

            for (let i = 1; i < page.length; i++) {
                if (document.getElementById(i))
                    document.getElementById(i).style.display = "none"
            }
            elem3.style.display = "block"
            elem4.style.display = "block"
            elem5.style.display = "block"
            elem6.style.display = "block"
            elem7.style.display = "block"
        setPage(p)
    }

    function pageLessSeven(p) {
        setPage(p)
    }

    function pageMoreSeven(p) {
        console.log("asd: ", p)
        const el2 = document.getElementById("2")
        const el3 = document.getElementById("3")
        const el4 = document.getElementById("4")
        const el5 = document.getElementById("5")
        const el6 = document.getElementById("6")
        if ((el2.style.display !== "none" && parseInt(el2.textContent) === p)) {

        }
        else if((parseInt(el3.textContent) === p)){
            for (let i = 1; i < page.length; i++) {
                if (document.getElementById(i))
                    document.getElementById(i).style.display = "none"
            }
            el2.style.display = "block"
            el3.style.display = "block"
            el4.style.display = "block"
            el5.style.display = "block"
            el6.style.display = "block"
        }
        else if(parseInt(document.getElementById(p).textContent) === page.length-1){
            const elem3 = document.getElementById(p - 4)
            const elem4 = document.getElementById(p - 3)
            const elem5 = document.getElementById(p - 2)
            const elem6 = document.getElementById(p - 1)
            const elem7 = document.getElementById(p)

            for (let i = 1; i < page.length; i++) {
                if (document.getElementById(i))
                    document.getElementById(i).style.display = "none"
            }
            elem3.style.display = "block"
            elem4.style.display = "block"
            elem5.style.display = "block"
            elem6.style.display = "block"
            elem7.style.display = "block"
        }
        else if(parseInt(document.getElementById(p).textContent) === page.length-2){
            const elem3 = document.getElementById(p - 3)
            const elem4 = document.getElementById(p - 2)
            const elem5 = document.getElementById(p - 1)
            const elem6 = document.getElementById(p)
            const elem7 = document.getElementById(p + 1)

            for (let i = 1; i < page.length; i++) {
                if (document.getElementById(i))
                    document.getElementById(i).style.display = "none"
            }
            elem3.style.display = "block"
            elem4.style.display = "block"
            elem5.style.display = "block"
            elem6.style.display = "block"
            elem7.style.display = "block"
        }
        else {
            const elem3 = document.getElementById(p - 2)
            const elem4 = document.getElementById(p - 1)
            const elem5 = document.getElementById(p)
            const elem6 = document.getElementById(p + 1)
            const elem7 = document.getElementById(p + 2)

            for (let i = 1; i < page.length; i++) {
                if (document.getElementById(i))
                    document.getElementById(i).style.display = "none"
            }
            elem3.style.display = "block"
            elem4.style.display = "block"
            elem5.style.display = "block"
            elem6.style.display = "block"
            elem7.style.display = "block"

        }
        setPage(p)
    }

    function nextPage() {
        if (pageNow !== page.length) {
            if(page.length <= 7){

            }
            else{
            let p = pageNow + 1
            if(p !== page.length){
            const el2 = document.getElementById("2")
        const el3 = document.getElementById("3")
        const el4 = document.getElementById("4")
        const el5 = document.getElementById("5")
        const el6 = document.getElementById("6")
        if ((el2.style.display !== "none" && parseInt(el2.textContent) === p)) {

        }
        else if((parseInt(el3.textContent) === p)){
            for (let i = 1; i < page.length; i++) {
                if (document.getElementById(i))
                    document.getElementById(i).style.display = "none"
            }
            el2.style.display = "block"
            el3.style.display = "block"
            el4.style.display = "block"
            el5.style.display = "block"
            el6.style.display = "block"
        }
        else if(parseInt(document.getElementById(p).textContent) === page.length-1){
            const elem3 = document.getElementById(p - 4)
            const elem4 = document.getElementById(p - 3)
            const elem5 = document.getElementById(p - 2)
            const elem6 = document.getElementById(p - 1)
            const elem7 = document.getElementById(p)

            for (let i = 1; i < page.length; i++) {
                if (document.getElementById(i))
                    document.getElementById(i).style.display = "none"
            }
            elem3.style.display = "block"
            elem4.style.display = "block"
            elem5.style.display = "block"
            elem6.style.display = "block"
            elem7.style.display = "block"
        }
        else if(parseInt(document.getElementById(p).textContent) === page.length-2){
            const elem3 = document.getElementById(p - 3)
            const elem4 = document.getElementById(p - 2)
            const elem5 = document.getElementById(p - 1)
            const elem6 = document.getElementById(p)
            const elem7 = document.getElementById(p + 1)

            for (let i = 1; i < page.length; i++) {
                if (document.getElementById(i))
                    document.getElementById(i).style.display = "none"
            }
            elem3.style.display = "block"
            elem4.style.display = "block"
            elem5.style.display = "block"
            elem6.style.display = "block"
            elem7.style.display = "block"
        }
        else {
            const elem3 = document.getElementById(p - 2)
            const elem4 = document.getElementById(p - 1)
            const elem5 = document.getElementById(p)
            const elem6 = document.getElementById(p + 1)
            const elem7 = document.getElementById(p + 2)

            for (let i = 1; i < page.length; i++) {
                if (document.getElementById(i))
                    document.getElementById(i).style.display = "none"
            }
            elem3.style.display = "block"
            elem4.style.display = "block"
            elem5.style.display = "block"
            elem6.style.display = "block"
            elem7.style.display = "block"

         }
        }
        }
            setPage(pageNow + 1)
        }
    }

    function previousPage() {
        if (pageNow !== 1) {
            if(page.length <= 7){

            }
            else{
            let p = pageNow - 1
            if(p !== 1){
            const el2 = document.getElementById("2")
        const el3 = document.getElementById("3")
        const el4 = document.getElementById("4")
        const el5 = document.getElementById("5")
        const el6 = document.getElementById("6")
        if ((el2.style.display !== "none" && parseInt(el2.textContent) === p)) {

        }
        else if((parseInt(el3.textContent) === p)){
            for (let i = 1; i < page.length; i++) {
                if (document.getElementById(i))
                    document.getElementById(i).style.display = "none"
            }
            el2.style.display = "block"
            el3.style.display = "block"
            el4.style.display = "block"
            el5.style.display = "block"
            el6.style.display = "block"
        }
        else if(parseInt(document.getElementById(p).textContent) === page.length-1){
            const elem3 = document.getElementById(p - 4)
            const elem4 = document.getElementById(p - 3)
            const elem5 = document.getElementById(p - 2)
            const elem6 = document.getElementById(p - 1)
            const elem7 = document.getElementById(p)

            for (let i = 1; i < page.length; i++) {
                if (document.getElementById(i))
                    document.getElementById(i).style.display = "none"
            }
            elem3.style.display = "block"
            elem4.style.display = "block"
            elem5.style.display = "block"
            elem6.style.display = "block"
            elem7.style.display = "block"
        }
        else if(parseInt(document.getElementById(p).textContent) === page.length-2){
            const elem3 = document.getElementById(p - 3)
            const elem4 = document.getElementById(p - 2)
            const elem5 = document.getElementById(p - 1)
            const elem6 = document.getElementById(p)
            const elem7 = document.getElementById(p + 1)

            for (let i = 1; i < page.length; i++) {
                if (document.getElementById(i))
                    document.getElementById(i).style.display = "none"
            }
            elem3.style.display = "block"
            elem4.style.display = "block"
            elem5.style.display = "block"
            elem6.style.display = "block"
            elem7.style.display = "block"
        }
        else {
            const elem3 = document.getElementById(p - 2)
            const elem4 = document.getElementById(p - 1)
            const elem5 = document.getElementById(p)
            const elem6 = document.getElementById(p + 1)
            const elem7 = document.getElementById(p + 2)

            for (let i = 1; i < page.length; i++) {
                if (document.getElementById(i))
                    document.getElementById(i).style.display = "none"
            }
            elem3.style.display = "block"
            elem4.style.display = "block"
            elem5.style.display = "block"
            elem6.style.display = "block"
            elem7.style.display = "block"

        }}}
            setPage(pageNow - 1)
        }
    }

    return (
        <div className='pages'>
            <div className='buttonPage' onClick={() => previousPage()}>
                <img src={lArrow} className='arrowStyle' />
            </div>
            {page.length <= 7 ? page.map(item => (
                <div className={item === pageNow ? "page_selected" : "page"} onClick={() => pageLessSeven(item)}>
                    {item}
                </div>
            )) : page.map(item => (
                item === 1 || item < 7 || item === page.length ? item === 1 ? <div className={item === pageNow ? "page_selected" : "page"} onClick={() => firstPage(item)}>{item}</div> : item === page.length ? <div className={item === pageNow ? "page_selected" : "page"} onClick={() => lastPage(item)}>{item}</div> : <div id={item} className={item === pageNow ? "page_selected" : "page"} onClick={() => pageMoreSeven(item)}>{item}</div> : <div id={item} className={item === pageNow ? "page_selected" : "page"} onClick={() => pageMoreSeven(item)} style={{ display: "none" }}>{item}</div>
            ))}
            <div className='buttonPage' onClick={() => nextPage()}>
                <img src={rArrow} className='arrowStyle' />
            </div>
        </div>
    );
}

export default Pages;