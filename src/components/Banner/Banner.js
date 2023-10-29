function Banner({ status = 'happy', children }) {
  return (
    <div role='alert' className={`${status} banner`}>
      {children}
    </div>
  );
}

export default Banner;
