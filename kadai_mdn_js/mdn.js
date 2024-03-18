const outputToday = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const realMonth = month +1;
    const day = today.getDate();
    console.log(year +'年' +realMonth + '月' + day + '日'); 
} 

outputToday();