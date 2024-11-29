function habilidadesComponents({ image, nome }) {
  return (
    <div className="h-[100px] w-[120px] text-center font-bold flex flex-col items-center justify-center rounded">
      <p>{nome}</p>
      <img src={image} alt="" className=" h-[50%]" />
    </div>
  );
}

export default habilidadesComponents;
