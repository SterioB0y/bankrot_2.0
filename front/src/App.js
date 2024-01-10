import React, { useEffect, useState } from 'react';
import DebtorsTable from './component/DebtorsTable';
import "./styles/appStyle.css"
import filterImg from "./assets/filter.png"
import FilterWindow from './component/FilterWindow';
import Pages from './component/Pages';

function App() {

  const [visible, setVisible] = useState("hidden")
  const [heig, setHeig] = useState("0px")
  const [positionFilter, setPositionFilter] = useState("fixed")
  const [positionMain, setPositionMain] = useState("relative")
  const [serchNameDebtor, setSerchNameDebtor] = useState("")
  const [serchNameManager, setSerchNameManager] = useState("")
  const [pages, setPages] = useState(0)
  const [pageNow, setPageNow] = useState(1)
  const [debtors, setDebtors] = useState([]);
  const [pagesArray, setPagesArray] = useState([1])

  const [filter, setFilter] = useState({
    Filters: {
      Name: "",
      RegionId: "0",
      Manager: "",
      DateFrom: null,
      DateTo: null,
      Unp: "",
      FileNumber: "",
      FileStatusId: "-1",
      DebtorCategoryId: "0",
      DeclarantId: "0",
      ProcedureId: "0"
    }
  })

  const [debtorsList, setDebtorsList] = useState({
    ...filter,
    Page: 1,
    PageSize: 15,
    SortBy: "DateStart",
    SortOrder: "DESC"
  })

  /** 

  const apiUrl = 'https://thingproxy.freeboard.io/fetch/https://bankrot.gov.by/Home/GetNewsItems';

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

  const value = {
    Page: 1,
    PageSize: 20,
    SortOrder: "DESC",
    SortBy: "DateStart",
    Filters: {
      Name: "",
      RegionId: "0",
      Manager: "",
      DateFrom: "2023-10-02T21:00:00.000Z",
      DateTo: "2023-10-29T21:00:00.000Z",
      Unp: "",
      FileNumber: "",
      FileStatusId: "-1",
      DebtorCategoryId: "0",
      DeclarantId: "0",
      ProcedureId: "0"
    }
  }

    fetch("http://localhost:3001/Debtors/GetDebtors", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(value),
    })
    .then(res=>res.json())
    .then(res=>console.log(res))

  */



  function openFilter() {
    setVisible("visible")
    setHeig(`${document.querySelector(".container-filter").getBoundingClientRect().height}px`)
    setPositionMain("fixed")
    setPositionFilter("relative")
  }

  function closeFilter() {
    setVisible("hidden")
    setPositionMain("relative")
    setPositionFilter("fixed")
  }



  useEffect(() => {
    fetch("http://localhost:3001/Debtors/GetDebtorsCount", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(filter),
    })
      .then(response => response.text())
      .then(data => setPages(data))
      .catch(error => console.error('Error:', error));

      fetch("http://localhost:3001/Debtors/GetDebtors", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(debtorsList),
    })
      .then(response => response.json())
      .then(data => setDebtors(data))
      .catch(error => console.error('Error:', error));

  }, [filter, serchNameDebtor, serchNameManager])

  useEffect(()=>{
    fetch("http://localhost:3001/Debtors/GetDebtors", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(debtorsList),
    })
      .then(response => response.json())
      .then(data => setDebtors(data))
      .catch(error => console.error('Error:', error));
      
  },[debtorsList])

  useEffect(() => {
    // console.log(debtorsList)
    console.log(pageNow)
  }, [debtors])

  useEffect(()=>{
    const tempcount = Math.ceil((pages) / 15)
    let temparr = []
    for (let i = 1; i <= tempcount; i++) {
      temparr.push(i)
    }
    setPagesArray(temparr)
  },[pages])


  const updateFilter = (update) => {
    setPageNow(1)
    setDebtorsList((oldObj) => ({
      ...oldObj,
      ...update,
      Page: 1
    }))
    setFilter((oldObj) => ({
      ...oldObj,
      ...update,
    }))

  }

  const nameValue = (e) => {
    setPageNow(1)
    const value = e.target.value
    setSerchNameDebtor(value)
    const updateFilter = {

      Filters: {
        ...filter.Filters,
        Name: value,
      }
    }
    const updateFilterDeb = {
      ...debtorsList,
      Filters: {
        ...filter.Filters,
        Name: value,
      },
      Page: 1,
    }
    setDebtorsList(updateFilterDeb)
    setFilter(updateFilter)

  }

  const managerValue = (e) => {
    setPageNow(1)
    const value = e.target.value
    setSerchNameManager(value)
    const updateFilter = {

      Filters: {
        ...filter.Filters,
        Manager: value,
      }
    }
    const updateFilterDeb = {
      ...debtorsList,
      Filters: {
        ...filter.Filters,
        Manager: value,
      },
      Page: 1,
    }
    setDebtorsList(updateFilterDeb)
    setFilter(updateFilter)
  }

  const updatePage = (update) =>{
    const updateFilterDeb = {
      ...debtorsList,
      Page: update,
    }
    setDebtorsList(updateFilterDeb)
    setPageNow(update)
  }

  const updateSort = (update) => {
    setPageNow(1)
    setDebtorsList((oldObj) => ({
      ...oldObj,
      ...update,
      Page: 1
    }))

  }

  return (
    <div className='container'>
      <FilterWindow filter={updateFilter} position={positionFilter} close={closeFilter} height={heig} visible={visible} valueName={serchNameDebtor} valueManager={serchNameManager} />
      <div className='mainContainer' style={{ position: positionMain }}>
        <div className='containerFilter'>
          <img className='buttonFilter' src={filterImg} onClick={openFilter} />
          <div className='containerInput'>
            <input className='nameDebtor' placeholder='Наименование должника...' value={serchNameDebtor} onChange={nameValue} />
            <input className='nameManager' placeholder='Управляющий...' value={serchNameManager} onChange={managerValue} />
          </div>
        </div>
        <div className='tableContainer'>
          <DebtorsTable sortBy={updateSort} countDeb={pages} debtorsList={debtors} />
        </div>
        <Pages page={pagesArray} pageNow={pageNow} setPage={updatePage}/>
      </div>
    </div>
  );
}

export default App;