window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
})
const FunctionApiUrl ='https://getresumecounter22.azurewebsites.net/api/GetResumeCounter?code=EZx1DxeggBT3-kMnleGCHA9j7aLEcLnaRjikllNg62_JAzFu5vSslg==';
const localFunctionApi = 'http://localhost:7071/api/GetResumeCounter';



const getVisitCount = () => {
    let count = 30;
    fetch(FunctionApiUrl).then(Response => {
        return Response.json()
    }).then(response => {
        console.log("Website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function (error) {
        console.log(error);
    });
    return count;
}