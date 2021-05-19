
import styled from "styled-components";
import cx from 'classnames';

const ButtonStyle = styled.div`
.btn {
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  height: 60px;
  border: none;
  background-color: primary;
  color: white;
  border-radius: 5px;
  font-size: 25px;
  font-weight: 500;
}

.btn:focus {
  transition: all 0.5s;
  outline: none;
  background-color: #f45f29;
}

.small {
  font-size: 16px;
  font-weight: 600;
  width: 110px !important;
  height: 30px !important;
  padding: 5px;
  display: block;
  margin: 0 auto;
}

.outline {
  border: 1px solid primary;
  color: primary;
  background-color: white;
}

.outline:focus {
  color: white;
}

.curved {
  border-radius: 25px;
  width: 200px;
  height: 50px;
  font-size: 16px;
}

/* btn2 background:white color:orange */

.btn2 {
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  height: 60px;
  border: none;
  background-color: white;
  color: #f45f29;
  border-radius: 5px;
  font-size: 25px;
  font-weight: 500;
  border: 1px solid primary
}

.btn2:focus {
  transition: all 0.5s;
  outline: none;
  background-color: white;
}

/*button with icon*/

.btnIcon {
  width: 70px;
  height: 70px;
  background-color: secondary;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px auto 50px auto;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.078);
  cursor: pointer;
}

@media (max-width: 600px) {
  .btn2 {
    font-size: 12px;
  }
  .btn {
    font-size: 12px;
  }
}
`


export default function Button({
  children,
  outline,
  curved,
  small,
  onClick,
  className,
  style,
  props,
}) {
  let CName = cx(btn, className, {
    [outline]: outline,
    [curved]: curved,
    [small]: small,
  });
  return (
    <ButtonStyle className={CName} {...props} onClick={onClick} style={style}>
      {children}
    </ButtonStyle>
  );
}

// export function Button2({
//   children,
//   outline,
//   curved,
//   small,
//   onClick,
//   className,
//   style,
//   props,
// }) {
//   let CName2 = cx(styles.btn2, className, {
//     [styles.outline]: outline,
//     [styles.curved]: curved,
//     [styles.small]: small,
//   });
//   return (
//     <button className={CName2} {...props} onClick={onClick} style={style}>
//       {children}
//     </button>
//   );
// }

