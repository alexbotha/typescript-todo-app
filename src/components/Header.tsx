type HeaderProps = {
  image: {
    src: string;
    alt: string;
  };
};

export default function Header({ image }: HeaderProps) {
  return (
    <header>
    
        <img
          className="h-67 w-67 rounded-full object-cover object-center"
          {...image}
        />
  
    </header>
  );
}
