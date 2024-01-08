{ pkgs }: {
    deps = [
      pkgs.libev
      pkgs.gnuplot
      pkgs.ncurses.dev
      pkgs.gd
      pkgs.raylib
      # 以下安裝 SDL2 相關程式庫
      pkgs.SDL2
      pkgs.SDL2_image
      pkgs.SDL2_mixer
      pkgs.SDL2_ttf
    ];
  env = {
    PYTHON_LD_LIBRARY_PATH = pkgs.lib.makeLibraryPath [
      pkgs.libev
    ];
  };
}