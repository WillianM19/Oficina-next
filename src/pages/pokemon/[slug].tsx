import Image from "next/image"
import Logo from "/public/logo.svg"
import PokemonPlaceholder from "/public/pokemon-placeholder.svg"
import IconWeight from "/public/icon-weight.svg"
import IconSize from "/public/icon-size.svg"

export default function PokemonPage() {
  return (
    <main className="bg-gradient-to-r from-red-500 to-red-600 h-[100vh] flex flex-col p-[70px] pb-[0]">
      <a href="/" className="flex items-center gap-4">
        <Image src={Logo} width={60} height={60} alt="logo" />
        <h1 className="uppercase text-[31px] text-white font-bold">Pokédex</h1>
      </a>


      {/* <div className="bg-white w-full h-full mt-[100px] flex justify-center items-center gap-[150px]">
        <div className="w-[499px] h-[549px] relative">
          <Image src={PokemonPlaceholder} layout="fill" alt=""/>
        </div>
        <div>
          <h2 className="text-[31px] font-bold">SQUIRTLE</h2>
          <div className="flex gap-[19px] mt-[35px]">
            <span className="text-white font-light text-[22px] bg-green-950 p-[10px] rounded-full">GRASS</span>
            <span className="text-white font-light text-[22px] bg-green-950 p-[10px] rounded-full">POISON</span>
          </div>
          <div className="flex gap-[54px] text-stone-400 mt-[51px]">
            <div className="w-[180px] h-[127px] border border-stone-400 flex flex-col items-center justify-center text-[31px] rounded-lg">
              <div className="flex gap-2">
                <Image src={IconWeight} alt="" />
                <p>PESO</p>
              </div>
              <p>5</p>
            </div>
            <div className="px-[10px] h-[127px] border border-stone-400 flex flex-col items-center justify-center text-[31px] rounded-lg">
              <div className="flex gap-2">
                <Image src={IconSize} alt="" />
                <p>TAMANHO</p>
              </div>
              <p>5</p>
            </div>
          </div>
          <p className="mt-[51px] text-[31px] font-light">Pokémon encontrado nos ambientes:</p>
          <ul className="mt-[8px]">
            <li>Lorem ipsum dolor </li>
            <li>Lorem ipsum dolor </li>
          </ul>
        </div>
      </div> */}

      <div className="bg-white w-full h-full mt-[100px] flex justify-center items-center gap-[150px]">
        <h1 className="text-[31px]">Pokemon não encontrado!</h1>
      </div>
    </main>
  )
}