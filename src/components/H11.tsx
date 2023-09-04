interface Props {
  titulo: string;
  t_class: string;
  subtitulo?: string;
  st_class?: string;
}

export default function H11({ titulo, subtitulo, t_class, st_class }) {
  return (
    <div>
      <h1 className={t_class}>{titulo}</h1>
      <h2 className={st_class}>{subtitulo}</h2>
      <div class="alert alert-success">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Your purchase has been confirmed!</span>
      </div>
      <div class="bg-red-400 p-10 flex items-center justify-center">
        <div class="card w-96 bg-base-100 shadow-xl ">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
