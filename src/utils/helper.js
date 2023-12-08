export   const searchSubmit = (searchText,allRestorentList)=>{
    const list = allRestorentList.filter((restorent)=> restorent.info.name.toLowerCase().includes(searchText.toLowerCase()))
    return list
  }