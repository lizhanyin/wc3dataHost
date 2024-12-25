wc3data project created by [d07RiV](https://github.com/d07RiV/wc3data)


modified by linsmod.github.com


For more information, see https://github.com/linsmod/wc3dataHost/blob/main/README.MD


-std=c++20 -Wall -Wextra : 使用 C++20 标准并给出所有警告
-s WASM=1
-O2                      : 未优化的 Emscripten 生成的 WASM 运行缓慢，因此最好进行优化。 -O3可能更快，但应谨慎使用，因为它可能导致跳过某些 C++ 代码。
-s NO_EXIT_RUNTIME=1     : 这使模块在调用之间保持就绪状态并防止过早释放其资源
-s ALLOW_MEMORY_GROWTH=1 : 允许模块在需要时声明更多内存。对于具有动态分配内存的模块很有用
-s MODULARIZE            : 创建一个可以由 JavaScript 正确加载的模块
-s SINGLE_FILE=1         : 将所有 WASM 代码和数据打包到单个文件中。加载到 React 中所必需的
-s NO_DISABLE_EXCEPTION_CATCHING : 允许模块抛出异常。可能会带来性能损失
-s EXPORT_ES6=1          : 导出为 ES6 模块。与 Vite 捆绑时必不可少
-lembind                 : 使用 Emscripten 的 Embind 功能，这是从 JavaScript 调用 C++ 代码中的函数的更顺畅的方式
-s ENVIRONMENT=worker    : 用于网络工作者加载的模块