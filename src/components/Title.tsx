export function Title({ subtitle }: { subtitle?: boolean }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-display text-primary dark:text-primaryDark">
        Tic tac toe
      </h1>
      {subtitle && (
        <span className="font-body text-secondary dark:text-secondaryDark">
          Desafie seus amigos para uma partida clássica.
        </span>
      )}
    </div>
  )
}
