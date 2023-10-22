import {routeLoader$, useLocation} from "@builder.io/qwik-city";
import {component$} from "@builder.io/qwik";

export const useRedirectUrl = routeLoader$(
  ctx => ctx.url.searchParams.get('redirect'),
);

export default component$(() => {
  const location = useLocation();

  const redirect = useRedirectUrl();

  return <div>
    <p>
      Redirect URL using useLocation: {location.url.searchParams.get('redirect')}
    </p>
    <hr/>
    <p>
      Redirect URL using useRedirectUrl (routeLoader$): {redirect.value}
    </p>
  </div>
});