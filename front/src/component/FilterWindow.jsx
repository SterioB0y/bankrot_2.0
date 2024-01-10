import React, { useEffect, useState } from 'react';
import closeImg from "../assets/images.png"
import "../styles/filterStyle.css";
import DropDownList from './DropDownList';
import Characteristics from './Characteristics';

const FilterWindow = ({ visible, height, close, position, filter, valueName, valueManager }) => {

    const [changeFilter, setChangeFilter] = useState({
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
    const [opClProcedure, setOpClProcedure] = useState("hidden")
    const [opClRegion, setOpClRegion] = useState("hidden")
    const [opClCategory, setOpClCategory] = useState("hidden")
    const [opClType, setOpClType] = useState("hidden")
    const [regionId, setRegionId] = useState("0")
    const [dateFrom, setDateFrom] = useState(null)
    const [dateTo, setDateTo] = useState(null)
    const [unp, setUNP] = useState("")
    const [fileNumber, setFileNumber] = useState("")
    const [fileStatusId, setFileStatusId] = useState("-1")
    const [debtorCategoryId, setDebtorCategoryId] = useState("0")
    const [declarantId, setDeclarantId] = useState("0")
    const [procedureId, setProcedureId] = useState("0")
    const [categoriesList, setCategoriesList] = useState({})
    const [typesList, setTypesList] = useState({})
    const [proceduresList, setProceduresList] = useState({})
    const [regionsList, setRegionsList] = useState({})
    const [activeButton, setActiveButton] = useState(false)
    const [unactiveButton, setUnactiveButton] = useState(false)

    function convertDateFormat(inputDate) {
        const [year, month, day] = inputDate.split('-');
        const newDate = new Date(`${year}-${month}-${day-1}T00:00:00.000Z`);
        const utcDate = new Date(newDate.getTime() - newDate.getTimezoneOffset() * 60000);
        const formattedDate = utcDate.toISOString();
      
        return formattedDate;
      }

    function updateFilter() {
        const tempDateFrom = dateFrom !== null ? convertDateFormat(dateFrom) : null
        const tempDateTo = dateTo !== null ? convertDateFormat(dateTo) : null
        const update = {
            ...changeFilter,
        Filters: {
            Name: valueName,
            RegionId: regionId,
            Manager: valueManager,
            DateFrom: tempDateFrom,
            DateTo: tempDateTo,
            Unp: unp,
            FileNumber: fileNumber,
            FileStatusId: fileStatusId,
            DebtorCategoryId: debtorCategoryId,
            DeclarantId: declarantId,
            ProcedureId: procedureId
        }
        }
        close()
        filter(update)
        setChangeFilter(update)
        setOpClCategory("hidden")
        setOpClProcedure("hidden")
        setOpClRegion("hidden")
        setOpClType("hidden")
    }

    function activOrUnactive(typeButton) {
        console.log(categoriesList)
        console.log(typesList)
        console.log(proceduresList)
        console.log(regionsList)
        const active = document.getElementById("activ")
        const unactive = document.getElementById("unactiv")
        if (typeButton == "activ") {
            if (activeButton == false && unactiveButton == false) {
                active.className = "inp__current"
                setActiveButton(true)
                setFileStatusId("1")
            }
            else if (activeButton == false && unactiveButton == true) {
                active.className = "inp__current"
                unactive.className = "inp"
                setActiveButton(true)
                setUnactiveButton(false)
                setFileStatusId("1")
            }
            else {
                active.className = "inp"
                setActiveButton(false)
                setUnactiveButton(false)
                setFileStatusId("-1")
            }
        }
        else {
            if (activeButton == false && unactiveButton == false) {
                unactive.className = "inp__current"
                setUnactiveButton(true)
                setFileStatusId("0")
            }
            else if (activeButton == true && unactiveButton == false) {
                unactive.className = "inp__current"
                active.className = "inp"
                setUnactiveButton(true)
                setActiveButton(false)
                setFileStatusId("0")
            }
            else {
                unactive.className = "inp"
                setUnactiveButton(false)
                setActiveButton(false)
                setFileStatusId("-1")
            }
        }
    }

    const updateRegions = (update) => {
        setRegionId(update)
    }

    const updateCategories = (update) => {
        setDebtorCategoryId(update)
    }

    const updateProcedures = (update) => {
        setProcedureId(update)
    }

    const updateTypes = (update) => {
        setDeclarantId(update)
    }


    useEffect(() => {
        //получение фильтра
        fetch("http://localhost:3001/Debtors/GetFiltersValues")
            .then(response => response.json())
            .then(data => {
                setCategoriesList(data.DebtorsCategoriesList)
                setProceduresList(data.ProceduresList)
                setRegionsList(data.RegionsList)
                setTypesList(data.DeclarantsList)
            })
            .catch(error => console.error('Error:', error));
    }, [])

    return (
        <div className="container-for-filter" style={{ visibility: visible, position: position }}>
            <div className='container-filter'>
                <div className='close-container'>
                    <img src={closeImg} style={{ width: '30px', margin: "5px 5px 0px 0px" }} onClick={() => updateFilter()} />
                </div>
                <div className='filter'>
                    <div className='paragraph-container'>
                        <div className='paragraph'>Дата:</div>
                    </div>
                    <div style={{ justifyContent: "space-between" }} className='paragraph-container'>
                        <div className='paragraph'>от:</div>
                        <div className='paragraph' style={{ marginRight: "109px" }}>до:</div>
                    </div>
                    <div className='flex-container'>
                        <input className='inp' type='date' value={dateFrom} onChange={e => setDateFrom(e.target.value)} /> {/*дата от(тип дата)*/}
                        <input className='inp' type='date' value={dateTo} onChange={e => setDateTo(e.target.value)} /> {/*дата до(тип дата)*/}
                    </div>
                    <div className='paragraph-container'>
                        <div className='paragraph'>Процедура:</div>
                    </div>
                    <DropDownList id={"procedure"} onClick={() => opClProcedure == "hidden" ? setOpClProcedure("visible") : setOpClProcedure("hidden")}>Процедура</DropDownList> {/*Процедура(тип выподающий список)*/}
                    <Characteristics id={updateProcedures} elements={"proceduresList"} classname={"procedure"} vison={opClProcedure} />
                    <div className='paragraph-container'>
                        <div className='paragraph'>УНП:</div>
                    </div>
                    <input className='inp' placeholder='УНП...' value={unp} onChange={e => setUNP(e.target.value)} /> {/*УПН(тип текстовое поле)*/}
                    <div className='paragraph-container'>
                        <div className='paragraph'>Регион:</div>
                    </div>
                    <DropDownList id={"region"} onClick={() => opClRegion == "hidden" ? setOpClRegion("visible") : setOpClRegion("hidden")}>Регион</DropDownList> {/*Регион(тип выподающий список)*/}
                    <Characteristics id={updateRegions} elements={"regionsList"} classname={"region"} vison={opClRegion} />
                    <div className='paragraph-container'>
                        <div className='paragraph'>Категории:</div>
                    </div>
                    <DropDownList id={"category"} onClick={() => opClCategory == "hidden" ? setOpClCategory("visible") : setOpClCategory("hidden")}>Категории</DropDownList> {/*Категории(тип выподающий список)*/}
                    <Characteristics id={updateCategories} elements={"categoriesList"} classname={"category"} vison={opClCategory} />
                    <div className='paragraph-container'>
                        <div className='paragraph'>Тип заявителя:</div>
                    </div>
                    <DropDownList id={"type"} onClick={() => opClType == "hidden" ? setOpClType("visible") : setOpClType("hidden")}>Тип заявителя</DropDownList> {/*Тип заявителя(тип выподающий список)*/}
                    <Characteristics id={updateTypes} elements={"typesList"} classname={"type"} vison={opClType} />
                    <div className='paragraph-container'>
                        <div className='paragraph'>Статус дела:</div>
                    </div>
                    <div className='flex-container' style={{ justifyContent: "space-around" }}>
                        <input className='inp' id={"activ"} type='button' value='Активное' onClick={() => activOrUnactive("activ")} /> {/*Статус дела(Кнопки закрытое и активное)*/}
                        <input className='inp' id={"unactiv"} type='button' value='Закрытое' onClick={() => activOrUnactive("unactiv")} /> {/*Статус дела(Кнопки закрытое и активное)*/}
                    </div>
                    <div className='paragraph-container'>
                        <div className='paragraph'>Номер дела:</div>
                    </div>
                    <input className='inp' placeholder='Номер дела...' value={fileNumber} onChange={e => setFileNumber(e.target.value)} /> {/*Номер дела(тип текстовое поле)*/}
                    {/* <div className='paragraph-container'>
                        <div className='paragraph'>Доля государственной собственности:</div>
                    </div> */}
                    {/* <div className='flex-container' style={{ marginLeft: "-20px" }}>
                        <input className='inp' placeholder='от...' /> 
                        <input className='inp' placeholder='до...' />
                    </div> */}
                </div>
            </div>
            <div className='black-area-for-close' style={{ height: height }} onClick={() => updateFilter()}>

            </div>
        </div>
    );
}

export default FilterWindow;