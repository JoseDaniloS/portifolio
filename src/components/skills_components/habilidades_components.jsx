function habilidadesComponents({ image, nome }) {
  return (
    <div className="h-[120px] w-[120px] text-center font-bold flex flex-col items-center justify-center rounded">
      <p>{nome}</p>
      <img src={image} alt="" className=" h-[70%]" />
    </div>
  );
}

export default habilidadesComponents;
