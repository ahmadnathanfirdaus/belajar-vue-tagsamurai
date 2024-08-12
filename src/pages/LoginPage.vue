<script setup lang="ts">
import { ref } from 'vue';
import TSInput from '@/components/common/TSInput.vue';
import AuthServices from '@/services/auth.service';
import { AuthRequestBody } from '@/dto/auth.dto';

const email = ref('');
const password = ref('');

const emailError = ref(false);
const passwordError = ref(false);

const login = async (): Promise<void> => {
  try {
    const authRequestBody: AuthRequestBody = {
      email: email.value,
      password: password.value,
    };
    const response = await AuthServices.authLogin(authRequestBody);
    if (response.status in [400, 499]) {
      const { data } = response.data;
      emailError.value = data.message === 'Email is not registered';
      passwordError.value = data.message === 'Password Incorrect';
    }

    const { data } = response.data;

    localStorage.setItem('token', data.token);
    location.reload();
  } catch (error) {
    console.error(error);
  }
};
</script>

<template>
  <div class="p-6 bg-blue-200 h-screen">
    <div
      class="flex min-h-full flex-col justify-center p-10 lg:px-8 rounded-2xl bg-white"
    >
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="logoipsum"
          class="mx-auto h-10 w-auto"
          src="@/assets/img/logoipsum.png"
        />
        <div class="text-center">
          <h2
            class="mt-8 text-4xl font-bold leading-9 tracking-tight text-gray-900"
          >
            Welcome!
          </h2>
          <p>Login with email</p>
        </div>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form action="#" class="space-y-6" method="POST">
          <TSInput
            v-model="email"
            :is-error="emailError"
            :required="true"
            error-message="Invalid email"
            label="Email"
            name="email"
            placeholder="Enter your email"
            type="email"
          />

          <TSInput
            v-model="password"
            :is-error="passwordError"
            :required="true"
            error-message="Invalid password"
            label="Password"
            name="password"
            placeholder="Enter your password"
            type="password"
          />

          <div>
            <button
              @click="login"
              class="flex w-full justify-center rounded-md bg-blue-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              type="button"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
