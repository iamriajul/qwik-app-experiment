import {Form, routeAction$} from "@builder.io/qwik-city";
import {component$} from "@builder.io/qwik";

export const useSubmitMyForm = routeAction$(
  (data, ctx) => {
    if (data['login-status'] === 'no') {
      throw ctx.redirect(302, '/my-login?redirect=/my-form');
    }
    // Standard ModularForms response
    return {
      status: 'success',
      message: 'Form submitted successfully',
    };
  }
);


export default component$(() => {
  const action = useSubmitMyForm();

  return <div>
    {action.value?.status === 'success' && <p>Form submitted successfully</p>}
    <Form action={action}>
      <label for="login-status">Login Status</label>
      <select name="login-status" id="login-status">
        <option value="no">Not Logged In</option>
        <option value="yes">Logged In</option>
      </select>
      <div>
        <button type="submit">Submit</button>
      </div>
    </Form>
  </div>
});