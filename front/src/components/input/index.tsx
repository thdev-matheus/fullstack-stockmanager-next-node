"use client";

import { forwardRef, useEffect, useState } from "react";
import * as T from "./types";
import style from "./styles.module.scss";
import InputMask from "react-input-mask";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Input = forwardRef<HTMLInputElement, T.IInputProps>(
  (
    {
      label,
      icon: Icon,
      error,
      inputSize = "medium",
      isMask = false,
      mask,
      type,
      iconAction,
      iconAfter = false,
      ...rest
    },
    ref
  ) => {
    const [isPassword, setIsPassword] = useState(false);
    const [isErrored, setIsErrored] = useState(false);

    useEffect(() => {
      type === "password" ? setIsPassword(true) : setIsPassword(false);
    }, [type]);

    useEffect(() => {
      error ? setIsErrored(true) : setIsErrored(false);
    }, [error]);

    return (
      <div data-size={inputSize} className={style.container}>
        <div>
          {label} {!!error && <span title={error}> - {error}</span>}
        </div>

        <section
          className={style.input_container}
          data-size={inputSize}
          data-error={isErrored && "true"}
          data-iconaction={!!iconAction && "true"}
        >
          {Icon && !iconAfter && (
            <div onClick={iconAction}>
              <Icon />
            </div>
          )}

          {isMask && mask ? (
            <InputMask type={type} mask={mask} {...rest} inputRef={ref} />
          ) : type === "password" ? (
            <>
              <input
                type={isPassword ? "password" : "text"}
                {...rest}
                ref={ref}
              />
              {isPassword ? (
                <FiEye
                  className={style.password_eye}
                  onClick={() => setIsPassword(!isPassword)}
                />
              ) : (
                <FiEyeOff
                  className={style.password_eye}
                  onClick={() => setIsPassword(!isPassword)}
                />
              )}
            </>
          ) : (
            <input type={type} {...rest} ref={ref} />
          )}

          {Icon && iconAfter && (
            <div onClick={iconAction}>
              <Icon />
            </div>
          )}
        </section>
      </div>
    );
  }
);

export default Input;
