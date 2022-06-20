window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
})
const localFunctionApi = 'http://localhost:7071/api/GetResumeCounter';


const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl).then(Response => {
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