import BlackWhite1 from "../photos/BlackWhite1.png"

export const Home = () => {
    return (
        <div style={{
            display: "flex",
            backgroundColor: "rgb(2,2,2)"
        }}>
            <div style={{
                backgroundColor: "rgb(2,2,2)"
            }}>
                <img src={BlackWhite1}
                    style={{
                        width: "35rem",
                        height: "45rem",
                        margin: "5px",
                    }} />
            </div>
            <div style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                position: "absolute",
                top: "50%",
                left: "15%",
                color: "rgb(277,277,277)",
                fontFamily: "sans-serif",
                fontSize: "35px",
                fontWeight: "bold"

            }}>
                Hello! <br /> My name is John Brady <br /> And I'm a full-stack developer.
            </div>
        </div>
    )
}

