import "./box.css"

function Box() {
    const boxData = [
        {
            title: "Box 1",
            textBox: "Lorem ipsum box 1",
            link: "#"
        },
        {
            title: "Box 2",
            textBox: "Lorem ipsum box 2",
            link: "#"
        },
           {
            title: "Box 3",
            textBox: "Lorem ipsum box 3",
            link: "#"
        }
    ];

    console.log(boxData)

    return (
        <div className='box-container'>
            {boxData.map((box) => {
                console.log(box)
                return (
                    <div className='box'>
                        <h2>{Box.title}</h2>
                        <p>{box.textBox}</p>
                        <a href="#">{box.link}</a>
                    </div>
                )
            })}
        </div>
    )
}

export default Box;
