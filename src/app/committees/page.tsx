import Hero from "@/components/Hero";

export default function CommitteePage() {
  return (
    <div>
      <Hero
        title="Committees"
        subtitle=""
        description="Explore the committees offered for delegates of all experience levels"
        buttonText="View Background Guide"
        hasButton={false}
        backgroundImage="/background.jpeg"
      />
    </div>
  );
}
