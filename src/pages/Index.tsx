import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const games = [
    {
      title: "Cyberpunk Racing",
      description: "Футуристические гонки в неоновом городе",
      image: "/img/1bddf388-f00b-410d-ac68-ad4825b77b82.jpg",
      size: "2.5 GB",
      rating: "9.2",
      downloads: "50K",
    },
    {
      title: "Neon Shooter",
      description: "Динамичный шутер с неоновой графикой",
      image: "/img/1bddf388-f00b-410d-ac68-ad4825b77b82.jpg",
      size: "1.8 GB",
      rating: "8.7",
      downloads: "32K",
    },
    {
      title: "Virtual Reality Quest",
      description: "Приключения в виртуальной реальности",
      image: "/img/1bddf388-f00b-410d-ac68-ad4825b77b82.jpg",
      size: "4.2 GB",
      rating: "9.5",
      downloads: "78K",
    },
  ];

  const news = [
    {
      title: "Новый эмулятор PS5 уже доступен",
      time: "2 часа назад",
      category: "Обновления",
    },
    {
      title: "Топ-10 игр недели для эмуляции",
      time: "6 часов назад",
      category: "Рейтинги",
    },
    {
      title: "Улучшена система антивирусной проверки",
      time: "1 день назад",
      category: "Безопасность",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)] animate-pulse-neon"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,0,255,0.1),transparent_50%)] animate-pulse-neon"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,128,255,0.1),transparent_50%)] animate-pulse-neon"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-neon-cyan/20 bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-neon-cyan animate-neon-glow">
                🎮 NEON GAMES
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a
                href="#"
                className="text-neon-cyan hover:text-neon-magenta transition-colors"
              >
                Главная
              </a>
              <a
                href="#"
                className="text-white hover:text-neon-cyan transition-colors"
              >
                Игры
              </a>
              <a
                href="#"
                className="text-white hover:text-neon-cyan transition-colors"
              >
                Новости
              </a>
              <a
                href="#"
                className="text-white hover:text-neon-cyan transition-colors"
              >
                Эмулятор
              </a>
            </div>
            <Button className="bg-neon-magenta/20 border border-neon-magenta text-neon-magenta hover:bg-neon-magenta hover:text-black animate-neon-glow">
              <Icon name="Download" size={16} className="mr-2" />
              Скачать
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-slide-up">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-blue bg-clip-text text-transparent animate-pulse-neon">
              ИГРОВАЯ ВСЕЛЕННАЯ
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Эмулируйте любые PC игры с передовой системой безопасности и
              встроенным антивирусом
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <Button className="bg-neon-cyan text-black hover:bg-neon-cyan/80 text-lg px-8 py-4 animate-neon-glow">
                <Icon name="Play" size={20} className="mr-2" />
                Запустить эмулятор
              </Button>
              <Button
                variant="outline"
                className="border-neon-magenta text-neon-magenta hover:bg-neon-magenta hover:text-black text-lg px-8 py-4"
              >
                <Icon name="Shield" size={20} className="mr-2" />
                Проверить на вирусы
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-black/40 border-neon-cyan/30 backdrop-blur-sm hover:border-neon-cyan transition-all duration-300 animate-slide-up">
              <CardHeader>
                <Icon
                  name="Gamepad2"
                  size={48}
                  className="text-neon-cyan mb-4 animate-neon-glow"
                />
                <CardTitle className="text-neon-cyan">Эмуляция игр</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Запускайте любые PC игры через наш продвинутый эмулятор с
                  поддержкой всех форматов
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-neon-magenta/30 backdrop-blur-sm hover:border-neon-magenta transition-all duration-300 animate-slide-up">
              <CardHeader>
                <Icon
                  name="Shield"
                  size={48}
                  className="text-neon-magenta mb-4 animate-neon-glow"
                />
                <CardTitle className="text-neon-magenta">Антивирус</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Встроенная система проверки на вирусы обеспечивает
                  безопасность всех загрузок
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-neon-blue/30 backdrop-blur-sm hover:border-neon-blue transition-all duration-300 animate-slide-up">
              <CardHeader>
                <Icon
                  name="Download"
                  size={48}
                  className="text-neon-blue mb-4 animate-neon-glow"
                />
                <CardTitle className="text-neon-blue">
                  Быстрая загрузка
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Скачивайте игры на максимальной скорости с нашими
                  оптимизированными серверами
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Games Catalog */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-neon-cyan to-neon-magenta bg-clip-text text-transparent">
            Популярные игры
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {games.map((game, index) => (
              <Card
                key={index}
                className="bg-black/60 border-gray-800 hover:border-neon-cyan/50 transition-all duration-300 group animate-slide-up"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <Badge className="absolute top-2 right-2 bg-neon-cyan text-black">
                    ⭐ {game.rating}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-white group-hover:text-neon-cyan transition-colors">
                    {game.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {game.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-neon-magenta font-semibold">
                      {game.size}
                    </span>
                    <span className="text-gray-400">
                      {game.downloads} загрузок
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-neon-cyan/20 border border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black">
                      <Icon name="Download" size={16} className="mr-2" />
                      Скачать
                    </Button>
                    <Button className="bg-neon-magenta/20 border border-neon-magenta text-neon-magenta hover:bg-neon-magenta hover:text-black">
                      <Icon name="Play" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-neon-magenta to-neon-blue bg-clip-text text-transparent">
            Новости игрового мира
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {news.map((item, index) => (
              <Card
                key={index}
                className="bg-black/40 border-gray-800 hover:border-neon-magenta/50 transition-all duration-300 animate-slide-up"
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge
                      variant="outline"
                      className="border-neon-blue text-neon-blue"
                    >
                      {item.category}
                    </Badge>
                    <span className="text-gray-500 text-sm">{item.time}</span>
                  </div>
                  <CardTitle className="text-white hover:text-neon-magenta transition-colors cursor-pointer">
                    {item.title}
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-800 bg-black/80 backdrop-blur-sm py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="text-2xl font-bold text-neon-cyan mb-4 animate-neon-glow">
            🎮 NEON GAMES
          </div>
          <p className="text-gray-400 mb-4">
            Платформа для эмуляции игр с передовыми технологиями безопасности
          </p>
          <div className="flex justify-center space-x-6">
            <Icon
              name="Github"
              size={24}
              className="text-gray-500 hover:text-neon-cyan transition-colors cursor-pointer"
            />
            <Icon
              name="Twitter"
              size={24}
              className="text-gray-500 hover:text-neon-cyan transition-colors cursor-pointer"
            />
            <Icon
              name="Discord"
              size={24}
              className="text-gray-500 hover:text-neon-cyan transition-colors cursor-pointer"
            />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
