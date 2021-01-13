<template>
  <div class="flex justify-center items-center w-screen h-screen">
    <div class="fade-dots text-2xl">
      <div class="mask"></div>
    </div>
  </div>
</template>


<style>

@keyframes dots {
  10% {
    color: #3671b7;
    content: 'Гружусь.';
  }
  50% {
    content: 'Гружусь..';
  }
  90% {
    color: #1d8d4e;
    content: 'Гружусь...';
  }
}

.fade-dots:after {
  content: "Гружусь";
  animation: dots 2.7s linear infinite;
}


@keyframes rotateSquad {
  0%, 100% {
    transform: translate(0) rotate(45deg)
  }
  25% {
    transform: translate(0)
  }
  50% {
    transform: translate(0)
  }
  75% {
    transform: translate(0) rotate(180deg);
  }
}

.mask {
  position: absolute;
  top: -1px;
  left: 1px;
  width: 50%;
  height: 1px;
  background-color: #fff;
}


</style>
