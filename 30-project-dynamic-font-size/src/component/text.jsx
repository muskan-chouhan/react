const Text = ({text}) => {

    return(
        <>
              <h1
        style={{
          fontSize:
            text === "Large"
              ? "24px"
              : text === "Medium"
              ? "16px"
              : "12px",
        }}
      >
        muskan
      </h1>
        </>
    )
} 
export default Text;