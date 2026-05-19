function customRender(reactElement, container){
    // const domElement = document.createElement(reactElement.type);
    // domElement.innerHTML = reactElement.children;
    // domElement.setAttribute("href", reactElement.props.href);
    // domElement.setAttribute("target", reactElement.props.target);

    // container.appendChild(domElement);

    //another way using loop
    const domEl = document.createElement(reactElement.type);
    domEl.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
        if(prop === "children") continue;
        domEl.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(domEl);
}



const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: "_blank",
    },
    children: "click here to visit google"
}


const mainContainer = document.getElementById("root");

customRender(reactElement, mainContainer);