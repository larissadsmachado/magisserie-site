import Image from "next/image";
import { Button } from "@/components/Button";
import { assets } from "@/lib/assets";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center gap-5 text-center">
      <Image {...assets.gato} alt="" className="h-auto w-40" />
      <h1 className="text-3xl font-bold">Página não encontrada</h1>
      <Button href="/">Voltar ao início</Button>
    </div>
  );
}
