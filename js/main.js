(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('bg-primary shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('bg-primary shadow-sm').css('top', '-150px');
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 1000,
        dots: true,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

    /* CUSTOMIZAÇÃO */

    // Objeto com textos por idioma
    const translations = {

        /* PORTUGUÊS PT-BR */
        pt: {

            spinner: {
                loading: "Carregando..."
            },

            navbar: {
                home: "Início",
                about: "Sobre Nós",
                services: "Serviços",
                projects: "Projetos",
                pages: "Páginas",
                features: "Funcionalidades",
                team: "Nosso Time",
                faq: "Perguntas Frequentes",
                testimonial: "Depoimentos",
                notfound: "Página 404",
                contact: "Contato"
            },

            search: {
                placeholder: "Buscar palavra-chave"
            },

            about: {
                badge: "Sobre Nós",
                title: "Fazemos seu negócio crescer com soluções financeiras globais",
                text1: "Na UDC, acreditamos que a mudança não é só de moeda, é de mentalidade. Ajudamos pessoas e empresas a operar globalmente com confiança, tecnologia e propósito.",
                text2: "Nossa presença internacional foi pensada para quebrar barreiras, facilitar transferências e promover um sistema financeiro mais acessível e humano.",
                feature1: "Equipe com experiência global",
                feature2: "Operações seguras e auditadas",
                feature3: "Suporte personalizado",
                feature4: "Conectividade entre países",
                cta: "Fale Conosco"
            },

            services: {
                badge: "Nossos Serviços",
                title: "Soluções digitais para suas necessidades financeiras",
                description: "Facilitamos transferências internacionais, câmbio de moedas e pagamentos globais com transparência, rapidez e segurança. Somos a ponte entre sua economia e o mundo.",
                cta: "Saiba Mais",
                ctaSmall: "Saiba Mais",
                exchangeTitle: "Câmbio de Moedas",
                exchangeText: "Realize conversões entre moedas com taxas competitivas e total transparência.",
                transferTitle: "Transferências Internacionais",
                transferText: "Envie e receba dinheiro entre países com agilidade e suporte profissional.",
                consultingTitle: "Consultoria Personalizada",
                consultingText: "Consultores especializados para ajudar você a operar globalmente com segurança.",
                esgTitle: "Compromisso ESG",
                esgText: "Iniciativas que promovem sustentabilidade, inclusão e bem-estar global."
            },

            feature: {
                badge: "Por que escolher a UDC?",
                title: "Somos a melhor opção para atuar internacionalmente",
                description: "Combinamos tecnologia, atendimento humano e transparência para transformar a forma como pessoas e empresas se relacionam com o dinheiro globalmente.",
                bullet1: "Plataforma digital intuitiva e segura",
                bullet2: "Equipe internacional especializada",
                bullet3: "Processos com foco humano e sustentável"
            },

            case: {
                badge: "Estudos de Caso",
                title: "Explore nossos projetos mais recentes",
                label1: "Automação Robótica",
                text1: "Solução completa para operações automatizadas em empresas logísticas.",
                label2: "Aprendizado de Máquina",
                text2: "Projeto de análise preditiva para o setor financeiro internacional.",
                label3: "Análise Preditiva",
                text3: "Plataforma inteligente aplicada a soluções de câmbio de moedas."
            },
            faq: {
                badge: "Perguntas Frequentes",
                title: "Tire suas dúvidas sobre nossos serviços",
                q1: "Como posso criar uma conta na UDC?",
                a1: "Você pode se cadastrar facilmente em nosso site preenchendo o formulário com seus dados pessoais e de contato.",
                q2: "Quais moedas posso trocar?",
                a2: "Atualmente oferecemos câmbio entre USD, EUR, BRL, COP, MXN e outras principais moedas. Consulte a lista completa no painel do cliente.",
                q3: "Minhas transações estão protegidas?",
                a3: "Sim, todas as nossas operações utilizam protocolos avançados de segurança e seguem normas internacionais de proteção financeira.",
                q4: "Posso receber pagamentos do exterior?",
                a4: "Sim. A UDC permite receber pagamentos internacionais em diversas moedas — ideal para freelancers, empresas e fornecedores globais.",
                q5: "Existe limite para transferência?",
                a5: "Os limites variam de acordo com seu perfil e país. Oferecemos soluções personalizadas para pequenos e grandes volumes.",
                q6: "A UDC cobra taxas?",
                a6: "Aplicamos tarifas justas, apresentadas com total transparência antes de cada operação."
            },
            newsletter: {
                badge: "Newsletter",
                title: "Assine e fique por dentro das novidades",
                placeholder: "Digite seu e-mail",
                note: "Não compartilhamos suas informações com terceiros."
            },
            footer: {
                about: "Oferecemos soluções financeiras globais com foco humano, segurança e eficiência para clientes no mundo todo.",
                contactTitle: "Fale Conosco",
                address: "Av. Central, São Paulo, Brasil",
                phone: "+55 11 0000-0000",
                email: "contato@udc.com",
                linksTitle: "Links úteis",
                linkAbout: "Sobre Nós",
                linkContact: "Contato",
                linkPrivacy: "Política de Privacidade",
                linkTerms: "Termos e Condições",
                servicesTitle: "Serviços",
                service1: "Câmbio de Moedas",
                service2: "Transferências Internacionais",
                service3: "Consultoria Financeira",
                service4: "Sustentabilidade ESG",
                copyright: "© 2025 UDC - Todos os direitos reservados.",
                menu: {
                    home: "Início",
                    cookies: "Cookies",
                    help: "Ajuda",
                    faq: "FAQs"
                }
            },
            footer: {
                about: "Oferecemos soluções financeiras globais com foco humano, segurança e eficiência para clientes no mundo todo.",
                contactTitle: "Fale Conosco",
                address: "Av. Central, São Paulo, Brasil",
                phone: "+55 11 0000-0000",
                email: "contato@udc.com",
                linksTitle: "Links úteis",
                linkAbout: "Sobre Nós",
                linkContact: "Contato",
                linkPrivacy: "Política de Privacidade",
                linkTerms: "Termos e Condições",
                servicesTitle: "Serviços",
                service1: "Câmbio de Moedas",
                service2: "Transferências Internacionais",
                service3: "Consultoria Financeira",
                service4: "Sustentabilidade ESG",
                copyright: "© 2025 UDC - Todos os direitos reservados.",
                menu: {
                  home: "Início",
                  cookies: "Cookies",
                  help: "Ajuda",
                  faq: "FAQs"
                }
              }
        },

        /* ENGLISH */

        en: {
            spinner: {
                loading: "Loading..."
            },

            navbar: {
                home: "Home",
                about: "About Us",
                services: "Services",
                projects: "Projects",
                pages: "Pages",
                features: "Features",
                team: "Our Team",
                faq: "FAQs",
                testimonial: "Testimonial",
                notfound: "404 Page",
                contact: "Contact"
            },

            search: {
                placeholder: "Type search keyword"
            },

            about: {
                badge: "About Us",
                title: "We help your business grow with global financial solutions",
                text1: "At UDC we believe change is not only about currency, it's about mindset. We help people and companies operate globally with confidence, technology and purpose.",
                text2: "Our international presence is designed to break down barriers, facilitate transfers and promote a more human and accessible financial system.",
                feature1: "Team with global experience",
                feature2: "Secure and audited operations",
                feature3: "Personalized support",
                feature4: "Cross-border connectivity",
                cta: "Contact Us"
            },

            services: {
                badge: "Our Services",
                title: "Digital solutions for your financial needs",
                description: "We facilitate international transfers, currency exchange, and global payments with transparency, speed, and security. We are the bridge between your economy and the world.",
                cta: "Learn More",
                ctaSmall: "Learn More",
                exchangeTitle: "Currency Exchange",
                exchangeText: "Convert currencies with competitive rates and full transparency.",
                transferTitle: "International Transfers",
                transferText: "Send and receive money between countries with agility and professional support.",
                consultingTitle: "Personalized Consulting",
                consultingText: "Specialized consultants to help you operate globally with confidence.",
                esgTitle: "ESG Commitment",
                esgText: "Initiatives that promote sustainability, inclusion, and global well-being."
            },

            feature: {
                badge: "Why Choose Us",
                title: "We are the best choice for international operations",
                description: "We combine technology, human care, and transparency to transform how people and businesses interact with money globally.",
                bullet1: "Intuitive and secure digital platform",
                bullet2: "Specialized international team",
                bullet3: "Human-centered and sustainable processes"
            },

            case: {
                badge: "Case Studies",
                title: "Explore our latest projects",
                label1: "Robotic Automation",
                text1: "Complete solution for automated operations in logistics companies.",
                label2: "Machine Learning",
                text2: "Predictive analytics project for the international financial sector.",
                label3: "Predictive Analysis",
                text3: "Smart platform applied to currency exchange solutions."
            },

            faq: {
                badge: "Frequently Asked Questions",
                title: "Find answers to your questions about our services",
                q1: "How can I create an account at UDC?",
                a1: "You can easily register on our website by filling out the signup form with your personal and contact information.",
                q2: "Which currencies can I exchange?",
                a2: "We currently offer exchange between USD, EUR, BRL, COP, MXN, and other major currencies. Check the full list inside the client panel.",
                q3: "Are my transactions protected?",
                a3: "Yes, all operations use advanced security protocols and comply with international financial protection standards.",
                q4: "Can I receive payments from abroad?",
                a4: "Absolutely. UDC allows international payments in multiple currencies — perfect for freelancers, businesses, and global suppliers.",
                q5: "Is there a transfer limit?",
                a5: "Limits vary depending on your profile and country. We offer customized solutions for both small and large transfers.",
                q6: "Does UDC charge fees?",
                a6: "We apply fair fees, always displayed with full transparency before each transaction."
            },
            newsletter: {
                badge: "Newsletter",
                title: "Subscribe and stay informed",
                placeholder: "Enter your email address",
                note: "We do not share your information with third parties."
            },
            footer: {
                about: "We provide global financial services with a human approach, security, and efficiency for clients around the world.",
                contactTitle: "Contact Us",
                address: "Central Avenue, Miami, USA",
                phone: "+1 000 000 0000",
                email: "contact@udc.com",
                linksTitle: "Useful Links",
                linkAbout: "About Us",
                linkContact: "Contact",
                linkPrivacy: "Privacy Policy",
                linkTerms: "Terms & Conditions",
                servicesTitle: "Services",
                service1: "Currency Exchange",
                service2: "International Transfers",
                service3: "Financial Consulting",
                service4: "ESG Sustainability",
                copyright: "© 2025 UDC - All rights reserved.",
                menu: {
                  home: "Home",
                  cookies: "Cookies",
                  help: "Help",
                  faq: "FAQs"
                }
              }
              
        },

        /* ESPANHOL */

        es: {
            spinner: {
                loading: "Cargando..."
            },

            navbar: {
                home: "Inicio",
                about: "Sobre Nosotros",
                services: "Servicios",
                projects: "Proyectos",
                pages: "Páginas",
                features: "Características",
                team: "Nuestro Equipo",
                faq: "Preguntas Frecuentes",
                testimonial: "Testimonios",
                notfound: "Página 404",
                contact: "Contacto"
            },

            search: {
                placeholder: "Buscar palabra clave"
            },

            about: {
                badge: "Sobre Nosotros",
                title: "Hacemos que tu negocio crezca con soluciones financieras globales",
                text1: "En UDC creemos que el cambio no es solo de moneda, sino de mentalidad. Ayudamos a personas y empresas a operar globalmente con confianza, tecnología y propósito.",
                text2: "Nuestra presencia internacional está diseñada para romper barreras, facilitar transferencias y promover un sistema financiero más accesible y humano.",
                feature1: "Equipo con experiencia global",
                feature2: "Operaciones seguras y auditadas",
                feature3: "Soporte personalizado",
                feature4: "Conectividad entre países",
                cta: "Contáctanos"
            },

            services: {
                badge: "Nuestros Servicios",
                title: "Soluciones digitales para tus necesidades financieras",
                description: "Facilitamos transferencias internacionales, cambio de divisas y pagos globales con transparencia, rapidez y seguridad. Somos la conexión entre tu economía y el mundo.",
                cta: "Saber Más",
                ctaSmall: "Saber Más",
                exchangeTitle: "Cambio de Divisas",
                exchangeText: "Realiza conversiones entre monedas con tasas competitivas y transparencia total.",
                transferTitle: "Transferencias Internacionales",
                transferText: "Envía y recibe dinero entre países con agilidad y soporte profesional.",
                consultingTitle: "Asesoría Personalizada",
                consultingText: "Consultores especializados para ayudarte a operar globalmente con confianza.",
                esgTitle: "Compromiso ESG",
                esgText: "Iniciativas que promueven la sostenibilidad, inclusión y el bienestar global."
            },

            feature: {
                badge: "¿Por qué elegirnos?",
                title: "Somos la mejor opción para operar a nivel internacional",
                description: "Combinamos tecnología, atención humana y transparencia para transformar la manera en que personas y empresas se relacionan con el dinero a nivel global.",
                bullet1: "Plataforma digital intuitiva y segura",
                bullet2: "Equipo internacional especializado",
                bullet3: "Procesos con enfoque humano y sostenible"
            },

            case: {
                badge: "Estudios de Caso",
                title: "Explora nuestros proyectos más recientes",
                label1: "Automatización Robótica",
                text1: "Solución integral para operaciones automatizadas en empresas logísticas.",
                label2: "Aprendizaje Automático",
                text2: "Proyecto de análisis predictivo para el sector financiero internacional.",
                label3: "Análisis Predictivo",
                text3: "Plataforma inteligente aplicada a soluciones de cambio de divisas."
            },
            faq: {
                badge: "Preguntas Frecuentes",
                title: "Resuelve tus dudas sobre nuestros servicios",
                q1: "¿Cómo puedo crear una cuenta en UDC?",
                a1: "Puedes registrarte fácilmente en nuestro sitio web completando el formulario de apertura con tus datos personales y de contacto.",
                q2: "¿Qué monedas puedo intercambiar?",
                a2: "Actualmente ofrecemos cambio entre USD, EUR, BRL, COP, MXN y otras monedas principales. Consulta nuestra lista completa dentro del panel del cliente.",
                q3: "¿Mis transacciones están protegidas?",
                a3: "Sí, todas nuestras operaciones utilizan protocolos de seguridad avanzados y cumplimos con normativas internacionales de protección financiera.",
                q4: "¿Puedo recibir pagos del exterior?",
                a4: "Claro. UDC permite recibir pagos internacionales en diferentes divisas, ideal para freelancers, empresas y proveedores globales.",
                q5: "¿Hay algún límite de transferencia?",
                a5: "Los límites varían según tu perfil y país. Ofrecemos soluciones personalizadas para pequeñas y grandes transferencias.",
                q6: "¿UDC cobra comisiones?",
                a6: "Aplicamos tarifas justas, mostradas con total transparencia antes de cada operación."
            },
            newsletter: {
                badge: "Boletín",
                title: "Suscríbete y mantente informado",
                placeholder: "Ingresa tu correo electrónico",
                note: "No compartimos tu información con terceros."
            },
            footer: {
                about: "Facilitamos servicios financieros globales con enfoque humano, seguridad y eficiencia para clientes en todo el mundo.",
                contactTitle: "Contáctanos",
                address: "Avenida Central, Bogotá, Colombia",
                phone: "+57 000 000 000",
                email: "contacto@udc.com",
                linksTitle: "Enlaces útiles",
                linkAbout: "Sobre Nosotros",
                linkContact: "Contáctanos",
                linkPrivacy: "Política de Privacidad",
                linkTerms: "Términos y Condiciones",
                servicesTitle: "Servicios",
                service1: "Cambio de Divisas",
                service2: "Transferencias Internacionales",
                service3: "Asesoría Financiera",
                service4: "Sostenibilidad ESG",
                copyright: "© 2025 UDC - Todos los derechos reservados.",
                menu: {
                  home: "Inicio",
                  cookies: "Cookies",
                  help: "Ayuda",
                  faq: "FAQs"
                }
              }
              
        }
    };

    // Detectar idioma do navegador
    const browserLang = navigator.language.toLowerCase().split('-')[0]; // ex: "pt-br" → "pt"
    const supportedLangs = ['pt', 'en', 'es'];
    const userLang = supportedLangs.includes(browserLang) ? browserLang : 'es'; // fallback: espanhol

    // Aplicar no DOM
    function applyTranslation(lang) {
        const dict = translations[lang] || translations.es;

        document.querySelectorAll('[data-lang]').forEach(el => {
            const key = el.getAttribute('data-lang');
            const path = key.split('.');
            let text = dict;

            for (let p of path) {
                if (text[p]) {
                    text = text[p];
                } else {
                    text = null;
                    break;
                }
            }

            if (text) {
                el.innerText = text;
            }
        });

        // Suporte a campos com placeholders
        document.querySelectorAll('[data-lang-placeholder]').forEach(el => {
            const key = el.getAttribute('data-lang-placeholder');
            const path = key.split('.');
            let text = dict;

            for (let p of path) {
                if (text[p]) {
                    text = text[p];
                } else {
                    text = null;
                    break;
                }
            }

            if (text) {
                el.placeholder = text;
            }
        });
    }


    // Executar
    applyTranslation(userLang);

})(jQuery);

