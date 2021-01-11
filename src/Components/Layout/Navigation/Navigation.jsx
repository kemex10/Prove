export const Navigation = (props) => {
  let bgColor = props.backgroundColor;
  let fontColor = props.color;

  if (props.darkMode) {
      bgColor = "#000";
      fontColor = "#6B879B"
  }

  const style = {
      backgroundColor: bgColor,
      color: fontColor
  }

  return (
      <header id={styles.container}>
            <nav>
                <ul>
                    <li><a href="/#">Start</a></li>
                    <li><a href="/#">Dit Co2</a></li>
                    <li><a href="/#">Clean Up</a></li>
                    <li><a href="/#">Tilmeld Dig</a></li>
                </ul>
            </nav>
        </header>
  )
}