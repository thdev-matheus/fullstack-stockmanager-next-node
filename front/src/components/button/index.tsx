import * as T from "./types";
import style from "./styles.module.scss";
import { forwardRef } from "react";

const Button = forwardRef<HTMLButtonElement, T.IButtonProps>(
  (
    { children, primary = true, secondary = false, size = "medium", ...rest },
    ref
  ) => {
    secondary ? (primary = false) : (primary = true);
    const type = primary ? "primary" : "secondary";

    return (
      <button
        ref={ref}
        className={style.container}
        data-type={type}
        data-size={size}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

export default Button;
