
import ImageGeneratorForm from "@/components/image-generator-form";

export default function ImageGeneratorPage() {
  return (
    <div className="bg-secondary">
      <div className="container mx-auto py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-headline font-bold text-primary">
            Générateur de Médias d'Entreprise IA
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Générez des images et des vidéos d'entreprise époustouflantes et conformes à votre marque en quelques secondes. Décrivez votre vision, et laissez notre IA lui donner vie, adaptée aux tendances stylistiques du domaine du conseil aux entreprises.
          </p>
        </div>
        <ImageGeneratorForm />
      </div>
    </div>
  );
}
