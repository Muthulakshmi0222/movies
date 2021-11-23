
export function ColorBox({ color }) {
    const styles = {
      backgroundColor: color,
      height: "80px", width: "500px", marginTop: "30px"
    };
    return (
      <div style={styles}>
      </div>
    );
  }