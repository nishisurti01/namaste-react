/*
<div id = "parent">
    <div id= "child">
        <h1>Hello from React</h1>
        <h2> I'm second child </h2>
    </div>

</div>

*/



const parent = React.createElement("div", {id: "parent"} //atributes to a class
,React.createElement("div", {id: "child" }, [
React.createElement("h1",{id: "heading"},"Hi from React"),
React.createElement("h2",{id: "heading"},"I'm second child")
]
) );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
