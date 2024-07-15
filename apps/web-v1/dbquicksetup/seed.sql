--
-- PostgreSQL database dump
--

-- Dumped from database version 16.3
-- Dumped by pg_dump version 16.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: blog; Type: TABLE; Schema: public
--

CREATE TABLE public.blog (
    id character varying NOT NULL,
    title character varying DEFAULT ''::character varying NOT NULL,
    description character varying DEFAULT ''::character varying NOT NULL,
    slug character varying DEFAULT ''::character varying NOT NULL,
    thumbnail_url character varying DEFAULT ''::character varying NOT NULL,
    thumbnail_alt character varying DEFAULT ''::character varying NOT NULL,
    tags character varying[] DEFAULT ARRAY[]::character varying[] NOT NULL,
    published_date timestamp with time zone DEFAULT now() NOT NULL,
    viewers integer DEFAULT 0 NOT NULL,
    contents jsonb DEFAULT '[]'::jsonb NOT NULL
);

--
-- Name: faq; Type: TABLE; Schema: public
--

CREATE TABLE public.faq (
    id character varying NOT NULL,
    title character varying DEFAULT ''::character varying NOT NULL,
    contents jsonb DEFAULT '[]'::jsonb NOT NULL
);

--
-- Name: migrations; Type: TABLE; Schema: public
--

CREATE TABLE public.migrations (
    migration_id integer NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    name text
);

--
-- Name: migrations_migration_id_seq; Type: SEQUENCE; Schema: public
--

CREATE SEQUENCE public.migrations_migration_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

--
-- Name: migrations_migration_id_seq; Type: SEQUENCE OWNED BY; Schema: public
--

ALTER SEQUENCE public.migrations_migration_id_seq OWNED BY public.migrations.migration_id;


--
-- Name: portfolio; Type: TABLE; Schema: public
--

CREATE TABLE public.portfolio (
    id character varying NOT NULL,
    title character varying DEFAULT ''::character varying NOT NULL,
    description character varying DEFAULT ''::character varying NOT NULL,
    slug character varying DEFAULT ''::character varying NOT NULL,
    thumbnail_url character varying DEFAULT ''::character varying NOT NULL,
    thumbnail_alt character varying DEFAULT ''::character varying NOT NULL,
    tags character varying[] DEFAULT ARRAY[]::character varying[] NOT NULL,
    contents jsonb DEFAULT '[]'::jsonb NOT NULL
);

--
-- Name: privacy_policy; Type: TABLE; Schema: public
--

CREATE TABLE public.privacy_policy (
    id character varying NOT NULL,
    title character varying DEFAULT ''::character varying NOT NULL,
    last_updated timestamp with time zone DEFAULT now() NOT NULL,
    contents jsonb DEFAULT '[]'::jsonb NOT NULL
);

--
-- Name: service; Type: TABLE; Schema: public
--

CREATE TABLE public.service (
    id character varying NOT NULL,
    title character varying DEFAULT ''::character varying NOT NULL,
    description character varying DEFAULT ''::character varying NOT NULL,
    tags character varying[] DEFAULT ARRAY[]::character varying[] NOT NULL,
    background_color character varying DEFAULT ''::character varying NOT NULL,
    background_image character varying DEFAULT ''::character varying NOT NULL,
    contents jsonb DEFAULT '{}'::jsonb NOT NULL,
    thumbnail_url character varying DEFAULT ''::character varying NOT NULL,
    thumbnail_alt character varying DEFAULT ''::character varying NOT NULL,
    slug character varying DEFAULT ''::character varying NOT NULL,
    items character varying[] DEFAULT ARRAY[]::character varying[] NOT NULL,
    footer_images jsonb DEFAULT '[]'::jsonb NOT NULL
);

--
-- Name: session; Type: TABLE; Schema: public
--

CREATE TABLE public.session (
    id character varying NOT NULL,
    expires_at timestamp with time zone NOT NULL,
    user_id character varying NOT NULL
);

--
-- Name: term_and_condition; Type: TABLE; Schema: public
--

CREATE TABLE public.term_and_condition (
    id character varying NOT NULL,
    title character varying DEFAULT ''::character varying NOT NULL,
    last_updated timestamp with time zone DEFAULT now() NOT NULL,
    contents jsonb DEFAULT '[]'::jsonb NOT NULL
);

--
-- Name: user; Type: TABLE; Schema: public
--

CREATE TABLE public."user" (
    id character varying NOT NULL,
    username character varying NOT NULL,
    password_hash character varying NOT NULL
);

--
-- Name: migrations migration_id; Type: DEFAULT; Schema: public
--

ALTER TABLE ONLY public.migrations ALTER COLUMN migration_id SET DEFAULT nextval('public.migrations_migration_id_seq'::regclass);


--
-- Data for Name: blog; Type: TABLE DATA; Schema: public
--

COPY public.blog (id, title, description, slug, thumbnail_url, thumbnail_alt, tags, published_date, viewers, contents) FROM stdin;
11b32ff8-d47b-4420-89f3-7aa41c506fe7	Mengapa Bisnis Anda Membutuhkan Solusi Software Khusus?	Artikel ini menjelaskan pentingnya memiliki solusi software yang disesuaikan dengan kebutuhan bisnis untuk meningkatkan efisiensi dan produktivitas.	mengapa-bisnis-anda-membutuhkan-solusi-software-khusus-1	https://res.cloudinary.com/dcej6w6ct/image/upload/v1720777849/hooore-web-profile/person-smile.png	Mengapa bisnis anda membutuhkan solusi software khsusu blog thumbnail	{"Industry Insights"}	2024-12-21 17:00:00+00	100	[{"type": "wrapper_one_column", "align": "left", "items": [{"text": "Dalam era digital saat ini, bisnis dihadapkan pada berbagai tantangan yang kompleks dan unik. Setiap perusahaan memiliki kebutuhan yang berbeda, sehingga solusi yang digunakan pun harus disesuaikan. Memiliki solusi software khusus adalah kunci untuk meningkatkan efisiensi operasional, keamanan data, dan skalabilitas bisnis. Dalam artikel ini, kita akan membahas mengapa bisnis Anda membutuhkan solusi software khusus dan bagaimana hal ini bisa membawa perubahan positif yang signifikan.", "type": "paragraph"}, {"alt": "Blog Thumbnail", "src": "https://res.cloudinary.com/dcej6w6ct/image/upload/v1720777849/hooore-web-profile/person-smile.png", "full": true, "type": "image"}, {"text": "Efisiensi Operasional", "type": "title", "titleVariant": "h2"}, {"text": "Optimalisasi Proses Bisnis", "type": "subtitle"}, {"text": "Solusi software yang disesuaikan dirancang khusus untuk memenuhi kebutuhan unik bisnis Anda. Ini berarti setiap fitur dan fungsi dalam software tersebut dapat dioptimalkan untuk meningkatkan efisiensi operasional. Dengan proses bisnis yang otomatis dan terintegrasi, Anda dapat mengurangi waktu dan biaya yang dihabiskan untuk tugas-tugas manual, sehingga memungkinkan tim Anda fokus pada tugas yang lebih strategis.", "type": "paragraph"}, {"type": "note", "title": "Contoh Kasus:", "description": "Misalnya, sebuah perusahaan e-commerce yang menggunakan software khusus untuk manajemen inventaris dapat melacak stok secara real-time, mengelola pesanan, dan mengotomatiskan proses pengiriman. Hal ini tidak hanya menghemat waktu tetapi juga mengurangi risiko kesalahan manusia."}, {"type": "divider", "subtle": true}, {"text": "Keamanan Data", "type": "title", "titleVariant": "h2"}, {"text": "Perlindungan yang Lebih Baik", "type": "subtitle"}, {"text": "Keamanan data adalah salah satu prioritas utama dalam bisnis saat ini. Dengan solusi software khusus, Anda dapat memastikan bahwa sistem keamanan yang diterapkan sesuai dengan standar industri dan kebutuhan spesifik perusahaan Anda. Ini mencakup enkripsi data, kontrol akses yang ketat, dan mekanisme pemulihan bencana yang dirancang khusus untuk melindungi informasi sensitif Anda.", "type": "paragraph"}, {"type": "note", "title": "Contoh Kasus:", "description": "Misalnya, sebuah perusahaan e-commerce yang menggunakan software khusus untuk manajemen inventaris dapat melacak stok secara real-time, mengelola pesanan, dan mengotomatiskan proses pengiriman. Hal ini tidak hanya menghemat waktu tetapi juga mengurangi risiko kesalahan manusia."}, {"type": "divider", "subtle": true}, {"text": "Skalabilitas", "type": "title", "titleVariant": "h2"}, {"text": "Tumbuh Bersama Bisnis Anda", "type": "subtitle"}, {"text": "Salah satu keuntungan utama dari solusi software khusus adalah kemampuannya untuk tumbuh bersama bisnis Anda. Ketika bisnis berkembang, kebutuhan dan proses bisnis Anda juga akan berubah. Software yang disesuaikan dapat dengan mudah di-upgrade dan dimodifikasi untuk mengakomodasi perubahan ini tanpa mengganggu operasi sehari-hari.", "type": "paragraph"}]}, {"type": "divider", "subtle": false}, {"type": "wrapper_two_column", "items": [{"type": "list", "items": [{"title": "Perusahaan Logistik XYZ", "description": "Perusahaan Logistik XYZ mengalami peningkatan efisiensi sebesar 30% setelah mengimplementasikan solusi software khusus untuk manajemen rantai pasokan mereka. Dengan fitur-fitur yang disesuaikan, seperti pelacakan pengiriman real-time dan analisis kinerja kendaraan, mereka dapat mengoptimalkan rute pengiriman dan mengurangi biaya operasional.", "titleVariant": "h3"}, {"title": "Perusahaan Retail ABC", "description": "Perusahaan Retail ABC meningkatkan kepuasan pelanggan mereka dengan 20% setelah mengembangkan aplikasi mobile khusus yang memungkinkan pelanggan untuk memesan produk secara langsung dari gudang mereka, melacak pengiriman, dan menerima pembaruan stok secara real-time. Solusi ini dirancang khusus untuk mengintegrasikan dengan sistem manajemen inventaris mereka yang ada, sehingga memberikan pengalaman belanja yang mulus dan efisien.", "titleVariant": "h3"}]}], "title": "Cerita Sukses"}, {"type": "divider", "subtle": false}, {"type": "wrapper_one_column", "align": "left", "items": [{"text": "Kesimpulan", "type": "title", "titleVariant": "h2"}, {"text": "Solusi software khusus menawarkan banyak keuntungan yang dapat membantu bisnis Anda mencapai efisiensi operasional yang lebih tinggi, keamanan data yang lebih baik, dan kemampuan untuk tumbuh seiring dengan perkembangan perusahaan. Dengan menyesuaikan software sesuai dengan kebutuhan spesifik bisnis Anda, Anda tidak hanya meningkatkan produktivitas tetapi juga memastikan bahwa Anda siap menghadapi tantangan dan peluang di masa depan.\\nJika Anda tertarik untuk mengetahui lebih lanjut tentang bagaimana solusi software khusus dapat membantu bisnis Anda, jangan ragu untuk menghubungi kami di Hooore. Tim ahli kami siap membantu Anda mengembangkan solusi yang tepat untuk kebutuhan Anda.", "type": "paragraph"}]}]
e299abf4-f2b8-40de-a076-6e26a4aa9f27	Mengapa Bisnis Anda Membutuhkan Solusi Software Khusus?	Artikel ini menjelaskan pentingnya memiliki solusi software yang disesuaikan dengan kebutuhan bisnis untuk meningkatkan efisiensi dan produktivitas.	mengapa-bisnis-anda-membutuhkan-solusi-software-khusus-2	https://res.cloudinary.com/dcej6w6ct/image/upload/v1720777849/hooore-web-profile/person-smile.png	Mengapa bisnis anda membutuhkan solusi software khsusu blog thumbnail	{"Industry Insights"}	2024-12-21 17:00:00+00	100	[{"type": "wrapper_one_column", "align": "left", "items": [{"text": "Dalam era digital saat ini, bisnis dihadapkan pada berbagai tantangan yang kompleks dan unik. Setiap perusahaan memiliki kebutuhan yang berbeda, sehingga solusi yang digunakan pun harus disesuaikan. Memiliki solusi software khusus adalah kunci untuk meningkatkan efisiensi operasional, keamanan data, dan skalabilitas bisnis. Dalam artikel ini, kita akan membahas mengapa bisnis Anda membutuhkan solusi software khusus dan bagaimana hal ini bisa membawa perubahan positif yang signifikan.", "type": "paragraph"}, {"alt": "Blog Thumbnail", "src": "https://res.cloudinary.com/dcej6w6ct/image/upload/v1720777849/hooore-web-profile/person-smile.png", "full": true, "type": "image"}, {"text": "Efisiensi Operasional", "type": "title", "titleVariant": "h2"}, {"text": "Optimalisasi Proses Bisnis", "type": "subtitle"}, {"text": "Solusi software yang disesuaikan dirancang khusus untuk memenuhi kebutuhan unik bisnis Anda. Ini berarti setiap fitur dan fungsi dalam software tersebut dapat dioptimalkan untuk meningkatkan efisiensi operasional. Dengan proses bisnis yang otomatis dan terintegrasi, Anda dapat mengurangi waktu dan biaya yang dihabiskan untuk tugas-tugas manual, sehingga memungkinkan tim Anda fokus pada tugas yang lebih strategis.", "type": "paragraph"}, {"type": "note", "title": "Contoh Kasus:", "description": "Misalnya, sebuah perusahaan e-commerce yang menggunakan software khusus untuk manajemen inventaris dapat melacak stok secara real-time, mengelola pesanan, dan mengotomatiskan proses pengiriman. Hal ini tidak hanya menghemat waktu tetapi juga mengurangi risiko kesalahan manusia."}, {"type": "divider", "subtle": true}, {"text": "Keamanan Data", "type": "title", "titleVariant": "h2"}, {"text": "Perlindungan yang Lebih Baik", "type": "subtitle"}, {"text": "Keamanan data adalah salah satu prioritas utama dalam bisnis saat ini. Dengan solusi software khusus, Anda dapat memastikan bahwa sistem keamanan yang diterapkan sesuai dengan standar industri dan kebutuhan spesifik perusahaan Anda. Ini mencakup enkripsi data, kontrol akses yang ketat, dan mekanisme pemulihan bencana yang dirancang khusus untuk melindungi informasi sensitif Anda.", "type": "paragraph"}, {"type": "note", "title": "Contoh Kasus:", "description": "Misalnya, sebuah perusahaan e-commerce yang menggunakan software khusus untuk manajemen inventaris dapat melacak stok secara real-time, mengelola pesanan, dan mengotomatiskan proses pengiriman. Hal ini tidak hanya menghemat waktu tetapi juga mengurangi risiko kesalahan manusia."}, {"type": "divider", "subtle": true}, {"text": "Skalabilitas", "type": "title", "titleVariant": "h2"}, {"text": "Tumbuh Bersama Bisnis Anda", "type": "subtitle"}, {"text": "Salah satu keuntungan utama dari solusi software khusus adalah kemampuannya untuk tumbuh bersama bisnis Anda. Ketika bisnis berkembang, kebutuhan dan proses bisnis Anda juga akan berubah. Software yang disesuaikan dapat dengan mudah di-upgrade dan dimodifikasi untuk mengakomodasi perubahan ini tanpa mengganggu operasi sehari-hari.", "type": "paragraph"}]}, {"type": "divider", "subtle": false}, {"type": "wrapper_two_column", "items": [{"type": "list", "items": [{"title": "Perusahaan Logistik XYZ", "description": "Perusahaan Logistik XYZ mengalami peningkatan efisiensi sebesar 30% setelah mengimplementasikan solusi software khusus untuk manajemen rantai pasokan mereka. Dengan fitur-fitur yang disesuaikan, seperti pelacakan pengiriman real-time dan analisis kinerja kendaraan, mereka dapat mengoptimalkan rute pengiriman dan mengurangi biaya operasional.", "titleVariant": "h3"}, {"title": "Perusahaan Retail ABC", "description": "Perusahaan Retail ABC meningkatkan kepuasan pelanggan mereka dengan 20% setelah mengembangkan aplikasi mobile khusus yang memungkinkan pelanggan untuk memesan produk secara langsung dari gudang mereka, melacak pengiriman, dan menerima pembaruan stok secara real-time. Solusi ini dirancang khusus untuk mengintegrasikan dengan sistem manajemen inventaris mereka yang ada, sehingga memberikan pengalaman belanja yang mulus dan efisien.", "titleVariant": "h3"}]}], "title": "Cerita Sukses"}, {"type": "divider", "subtle": false}, {"type": "wrapper_one_column", "align": "left", "items": [{"text": "Kesimpulan", "type": "title", "titleVariant": "h2"}, {"text": "Solusi software khusus menawarkan banyak keuntungan yang dapat membantu bisnis Anda mencapai efisiensi operasional yang lebih tinggi, keamanan data yang lebih baik, dan kemampuan untuk tumbuh seiring dengan perkembangan perusahaan. Dengan menyesuaikan software sesuai dengan kebutuhan spesifik bisnis Anda, Anda tidak hanya meningkatkan produktivitas tetapi juga memastikan bahwa Anda siap menghadapi tantangan dan peluang di masa depan.\\nJika Anda tertarik untuk mengetahui lebih lanjut tentang bagaimana solusi software khusus dapat membantu bisnis Anda, jangan ragu untuk menghubungi kami di Hooore. Tim ahli kami siap membantu Anda mengembangkan solusi yang tepat untuk kebutuhan Anda.", "type": "paragraph"}]}]
0fbc904c-c378-40ed-9b4a-6ff013027378	Mengapa Bisnis Anda Membutuhkan Solusi Software Khusus?	Artikel ini menjelaskan pentingnya memiliki solusi software yang disesuaikan dengan kebutuhan bisnis untuk meningkatkan efisiensi dan produktivitas.	mengapa-bisnis-anda-membutuhkan-solusi-software-khusus-3	https://res.cloudinary.com/dcej6w6ct/image/upload/v1720777849/hooore-web-profile/person-smile.png	Mengapa bisnis anda membutuhkan solusi software khsusu blog thumbnail	{"Industry Insights"}	2024-12-21 17:00:00+00	100	[{"type": "wrapper_one_column", "align": "left", "items": [{"text": "Dalam era digital saat ini, bisnis dihadapkan pada berbagai tantangan yang kompleks dan unik. Setiap perusahaan memiliki kebutuhan yang berbeda, sehingga solusi yang digunakan pun harus disesuaikan. Memiliki solusi software khusus adalah kunci untuk meningkatkan efisiensi operasional, keamanan data, dan skalabilitas bisnis. Dalam artikel ini, kita akan membahas mengapa bisnis Anda membutuhkan solusi software khusus dan bagaimana hal ini bisa membawa perubahan positif yang signifikan.", "type": "paragraph"}, {"alt": "Blog Thumbnail", "src": "https://res.cloudinary.com/dcej6w6ct/image/upload/v1720777849/hooore-web-profile/person-smile.png", "full": true, "type": "image"}, {"text": "Efisiensi Operasional", "type": "title", "titleVariant": "h2"}, {"text": "Optimalisasi Proses Bisnis", "type": "subtitle"}, {"text": "Solusi software yang disesuaikan dirancang khusus untuk memenuhi kebutuhan unik bisnis Anda. Ini berarti setiap fitur dan fungsi dalam software tersebut dapat dioptimalkan untuk meningkatkan efisiensi operasional. Dengan proses bisnis yang otomatis dan terintegrasi, Anda dapat mengurangi waktu dan biaya yang dihabiskan untuk tugas-tugas manual, sehingga memungkinkan tim Anda fokus pada tugas yang lebih strategis.", "type": "paragraph"}, {"type": "note", "title": "Contoh Kasus:", "description": "Misalnya, sebuah perusahaan e-commerce yang menggunakan software khusus untuk manajemen inventaris dapat melacak stok secara real-time, mengelola pesanan, dan mengotomatiskan proses pengiriman. Hal ini tidak hanya menghemat waktu tetapi juga mengurangi risiko kesalahan manusia."}, {"type": "divider", "subtle": true}, {"text": "Keamanan Data", "type": "title", "titleVariant": "h2"}, {"text": "Perlindungan yang Lebih Baik", "type": "subtitle"}, {"text": "Keamanan data adalah salah satu prioritas utama dalam bisnis saat ini. Dengan solusi software khusus, Anda dapat memastikan bahwa sistem keamanan yang diterapkan sesuai dengan standar industri dan kebutuhan spesifik perusahaan Anda. Ini mencakup enkripsi data, kontrol akses yang ketat, dan mekanisme pemulihan bencana yang dirancang khusus untuk melindungi informasi sensitif Anda.", "type": "paragraph"}, {"type": "note", "title": "Contoh Kasus:", "description": "Misalnya, sebuah perusahaan e-commerce yang menggunakan software khusus untuk manajemen inventaris dapat melacak stok secara real-time, mengelola pesanan, dan mengotomatiskan proses pengiriman. Hal ini tidak hanya menghemat waktu tetapi juga mengurangi risiko kesalahan manusia."}, {"type": "divider", "subtle": true}, {"text": "Skalabilitas", "type": "title", "titleVariant": "h2"}, {"text": "Tumbuh Bersama Bisnis Anda", "type": "subtitle"}, {"text": "Salah satu keuntungan utama dari solusi software khusus adalah kemampuannya untuk tumbuh bersama bisnis Anda. Ketika bisnis berkembang, kebutuhan dan proses bisnis Anda juga akan berubah. Software yang disesuaikan dapat dengan mudah di-upgrade dan dimodifikasi untuk mengakomodasi perubahan ini tanpa mengganggu operasi sehari-hari.", "type": "paragraph"}]}, {"type": "divider", "subtle": false}, {"type": "wrapper_two_column", "items": [{"type": "list", "items": [{"title": "Perusahaan Logistik XYZ", "description": "Perusahaan Logistik XYZ mengalami peningkatan efisiensi sebesar 30% setelah mengimplementasikan solusi software khusus untuk manajemen rantai pasokan mereka. Dengan fitur-fitur yang disesuaikan, seperti pelacakan pengiriman real-time dan analisis kinerja kendaraan, mereka dapat mengoptimalkan rute pengiriman dan mengurangi biaya operasional.", "titleVariant": "h3"}, {"title": "Perusahaan Retail ABC", "description": "Perusahaan Retail ABC meningkatkan kepuasan pelanggan mereka dengan 20% setelah mengembangkan aplikasi mobile khusus yang memungkinkan pelanggan untuk memesan produk secara langsung dari gudang mereka, melacak pengiriman, dan menerima pembaruan stok secara real-time. Solusi ini dirancang khusus untuk mengintegrasikan dengan sistem manajemen inventaris mereka yang ada, sehingga memberikan pengalaman belanja yang mulus dan efisien.", "titleVariant": "h3"}]}], "title": "Cerita Sukses"}, {"type": "divider", "subtle": false}, {"type": "wrapper_one_column", "align": "left", "items": [{"text": "Kesimpulan", "type": "title", "titleVariant": "h2"}, {"text": "Solusi software khusus menawarkan banyak keuntungan yang dapat membantu bisnis Anda mencapai efisiensi operasional yang lebih tinggi, keamanan data yang lebih baik, dan kemampuan untuk tumbuh seiring dengan perkembangan perusahaan. Dengan menyesuaikan software sesuai dengan kebutuhan spesifik bisnis Anda, Anda tidak hanya meningkatkan produktivitas tetapi juga memastikan bahwa Anda siap menghadapi tantangan dan peluang di masa depan.\\nJika Anda tertarik untuk mengetahui lebih lanjut tentang bagaimana solusi software khusus dapat membantu bisnis Anda, jangan ragu untuk menghubungi kami di Hooore. Tim ahli kami siap membantu Anda mengembangkan solusi yang tepat untuk kebutuhan Anda.", "type": "paragraph"}]}]
\.


--
-- Data for Name: faq; Type: TABLE DATA; Schema: public
--

COPY public.faq (id, title, contents) FROM stdin;
f15ea8a5-2e7f-4ef7-b29f-f2ccb0a945e7	What services does Hooore offer?	[{"paragraph": "At Hooore, we specialize in web app development, mobile app development, UI/UX design, and training and upskilling programs. Our team is dedicated to delivering robust and scalable solutions tailored to meet your business needs."}]
fd1f44a6-1ade-4c09-af37-32f0e2fb180a	What technologies do you use for development?	[{"paragraph": "Our tech stack includes JavaScript, TypeScript, HTML, CSS, React JS, Next JS, Node JS, Express JS, PostgreSQL, and Shacdn UI. We choose the best tools and frameworks to ensure your project is efficient, scalable, and maintainable."}]
7138207f-4fe5-487c-9b95-f200bcd6660b	How much experience does Hooore have?	[{"paragraph": "Although Hooore is a new company, our team brings over 5 years of collective experience in the technology industry. We leverage this expertise to provide high-quality and innovative solutions to our clients."}]
3c7f671e-1ac9-4a3c-9254-d2b6140ab8df	What is the process for starting a new project with Hooore?	[{"list": {"type": "ordered", "items": ["Initial Consultation: We meet with you to understand your business goals and requirements.", "Requirement Gathering: We document detailed specifications and user stories.", "Project Planning: We create a project roadmap with timelines and milestones.", "Design and Development: We follow Agile methodologies to develop your solution iteratively, with regular client reviews.", "Testing and Deployment: We conduct thorough testing before launching your project to ensure it meets all quality standards."]}, "paragraph": "Our process typically includes the following steps:"}]
b68b8fce-e3d2-4cf0-8de1-ba3f59bafa11	How do you ensure the quality of your web and mobile apps?	[{"paragraph": "Quality assurance is integral to our process. We perform unit testing, integration testing, and user acceptance testing (UAT) to ensure all components work seamlessly. Additionally, we gather client feedback during the UAT phase to make necessary adjustments before deployment."}]
2817c0db-72d5-432d-86e6-e1129f087333	Can you help with UI/UX design only?	[{"paragraph": "Yes, we offer standalone UI/UX design services. Our design team will work with you to create intuitive and engaging interfaces that align with your brand and enhance user experience."}]
22e862b0-47cf-46d4-a8f6-4a9b4d820932	How do you handle post-launch support and maintenance?	[{"paragraph": "We provide ongoing maintenance and updates to ensure your application remains secure, functional, and up-to-date with the latest technologies. Our support team is always available to address any issues or enhancements needed post-launch."}]
0330e03a-0576-468b-9c4f-3d803ee28b60	What is Agile methodology and how does Hooore implement it?	[{"paragraph": "Agile methodology is an iterative approach to project management and software development that promotes flexibility, collaboration, and customer feedback. At Hooore, we implement Agile by breaking the project into small, manageable sprints, allowing us to deliver parts of the project incrementally and adapt quickly to changes."}]
56c52980-8959-432d-b889-8aa0dc305a5a	How can I get started with Hooore?	[{"paragraph": "Getting started is easy! Simply contact us through our website, phone, or email to schedule an initial consultation. We’ll discuss your project needs and provide a tailored solution to help you achieve your business goals."}]
\.


--
-- Data for Name: migrations; Type: TABLE DATA; Schema: public
--

COPY public.migrations (migration_id, created_at, name) FROM stdin;
1	2024-07-12 12:17:57.692092+00	initial
2	2024-07-12 15:52:48.528545+00	auth
\.


--
-- Data for Name: portfolio; Type: TABLE DATA; Schema: public
--

COPY public.portfolio (id, title, description, slug, thumbnail_url, thumbnail_alt, tags, contents) FROM stdin;
a36261da-ea40-497e-8b63-f74e7205a397	3D Tissue Max	Artikel ini menjelaskan pentingnya memiliki solusi software yang disesuaikan dengan kebutuhan bisnis untuk meningkatkan efisiensi dan produktivitas.	3d-tissue-max-3	https://res.cloudinary.com/dcej6w6ct/image/upload/v1720777849/hooore-web-profile/person-smile.png	3D Tissue Max portfolio thumbnail	{Website}	[{"type": "wrapper_one_column", "align": "center", "items": [{"alt": "Portfolio Thumbnail", "src": "https://res.cloudinary.com/dcej6w6ct/image/upload/v1720777849/hooore-web-profile/person-smile.png", "full": true, "type": "image"}]}, {"type": "divider", "subtle": false}, {"type": "wrapper_one_column", "align": "center", "items": [{"type": "identity", "items": [{"title": "Cliet", "content": {"text": "InstaGo", "type": "identity_text"}}, {"title": "Year", "content": {"text": "2024", "type": "identity_text"}}, {"title": "Service", "content": {"type": "identity_list", "items": ["Product Design", "Marketing", "3D Model"], "ordered": false}}, {"title": "Award", "content": {"text": "Best Design SComplex 2024 ", "type": "identity_text"}}]}]}, {"type": "divider", "subtle": false}, {"type": "wrapper_one_column", "align": "center", "items": [{"type": "list", "items": [{"title": "Product Design", "description": "Just take out whatever you don't want. It'll change your entire perspective. In this world, everything can be happy. I will take some magic white, and a little bit of Vandyke brown and a little touch of yellow. Volunteering your time; it pays you and your whole community fantastic dividends. Fluff it up a little and hypnotize it. Take your time. Speed will come later.", "titleVariant": "h2"}, {"title": "Marketing", "description": "You can create the world you want to see and be a part of. You have that power. Trees grow however makes them happy. We'll take a little bit of Van Dyke Brown. You want your tree to have some character. Make it special. If you don't think every day is a good day - try missing a few. You'll see. We'll paint one happy little tree right here. Son of a gun.", "titleVariant": "h2"}, {"title": "3D Model", "description": "Trees get lonely too, so we'll give him a little friend. It's a good way of getting rid of all your anxieties and hostilities. You can create anything that makes you happy. And just raise cain. Now, we're going to fluff this cloud. Sometimes you learn more from your mistakes than you do from your masterpieces. Here's something that's fun.", "titleVariant": "h2"}]}]}, {"type": "divider", "subtle": false}, {"type": "wrapper_one_column", "align": "left", "items": [{"text": "Efisiensi Operasional", "type": "title", "titleVariant": "h2"}, {"text": "Optimalisasi Proses Bisnis", "type": "subtitle"}, {"text": "Solusi software yang disesuaikan dirancang khusus untuk memenuhi kebutuhan unik bisnis Anda. Ini berarti setiap fitur dan fungsi dalam software tersebut dapat dioptimalkan untuk meningkatkan efisiensi operasional. Dengan proses bisnis yang otomatis dan terintegrasi, Anda dapat mengurangi waktu dan biaya yang dihabiskan untuk tugas-tugas manual, sehingga memungkinkan tim Anda fokus pada tugas yang lebih strategis.", "type": "paragraph"}, {"alt": "Efisiensi Operasional Image", "src": "https://res.cloudinary.com/dcej6w6ct/image/upload/v1720777849/hooore-web-profile/person-smile.png", "full": true, "type": "image"}]}, {"type": "divider", "subtle": false}, {"type": "wrapper_two_column", "items": [{"type": "list", "items": [{"image": {"alt": "Perusahaan Logistik XYZ Image", "src": "https://res.cloudinary.com/dcej6w6ct/image/upload/v1720777849/hooore-web-profile/person-smile.png", "full": true, "type": "image"}, "title": "Perusahaan Logistik XYZ", "description": "Perusahaan Logistik XYZ mengalami peningkatan efisiensi sebesar 30% setelah mengimplementasikan solusi software khusus untuk manajemen rantai pasokan mereka. Dengan fitur-fitur yang disesuaikan, seperti pelacakan pengiriman real-time dan analisis kinerja kendaraan, mereka dapat mengoptimalkan rute pengiriman dan mengurangi biaya operasional.", "titleVariant": "h3"}]}], "title": "Keamanan Data"}]
43387626-d4fa-407d-80f3-16cfac3bd015	3D Tissue Max	Artikel ini menjelaskan pentingnya memiliki solusi software yang disesuaikan dengan kebutuhan bisnis untuk meningkatkan efisiensi dan produktivitas.	3d-tissue-max-1	https://res.cloudinary.com/dcej6w6ct/image/upload/v1720777849/hooore-web-profile/person-smile.png	3D Tissue Max portfolio thumbnail	{Website}	[{"type": "wrapper_one_column", "align": "center", "items": [{"alt": "Portfolio Thumbnail", "src": "https://res.cloudinary.com/dcej6w6ct/image/upload/v1720777849/hooore-web-profile/person-smile.png", "full": true, "type": "image"}]}, {"type": "divider", "subtle": false}, {"type": "wrapper_one_column", "align": "center", "items": [{"type": "identity", "items": [{"title": "Cliet", "content": {"text": "InstaGo", "type": "identity_text"}}, {"title": "Year", "content": {"text": "2024", "type": "identity_text"}}, {"title": "Service", "content": {"type": "identity_list", "items": ["Product Design", "Marketing", "3D Model"], "ordered": false}}, {"title": "Award", "content": {"text": "Best Design SComplex 2024 ", "type": "identity_text"}}]}]}, {"type": "divider", "subtle": false}, {"type": "wrapper_one_column", "align": "center", "items": [{"type": "list", "items": [{"title": "Product Design", "description": "Just take out whatever you don't want. It'll change your entire perspective. In this world, everything can be happy. I will take some magic white, and a little bit of Vandyke brown and a little touch of yellow. Volunteering your time; it pays you and your whole community fantastic dividends. Fluff it up a little and hypnotize it. Take your time. Speed will come later.", "titleVariant": "h2"}, {"title": "Marketing", "description": "You can create the world you want to see and be a part of. You have that power. Trees grow however makes them happy. We'll take a little bit of Van Dyke Brown. You want your tree to have some character. Make it special. If you don't think every day is a good day - try missing a few. You'll see. We'll paint one happy little tree right here. Son of a gun.", "titleVariant": "h2"}, {"title": "3D Model", "description": "Trees get lonely too, so we'll give him a little friend. It's a good way of getting rid of all your anxieties and hostilities. You can create anything that makes you happy. And just raise cain. Now, we're going to fluff this cloud. Sometimes you learn more from your mistakes than you do from your masterpieces. Here's something that's fun.", "titleVariant": "h2"}]}]}, {"type": "divider", "subtle": false}, {"type": "wrapper_one_column", "align": "left", "items": [{"text": "Efisiensi Operasional", "type": "title", "titleVariant": "h2"}, {"text": "Optimalisasi Proses Bisnis", "type": "subtitle"}, {"text": "Solusi software yang disesuaikan dirancang khusus untuk memenuhi kebutuhan unik bisnis Anda. Ini berarti setiap fitur dan fungsi dalam software tersebut dapat dioptimalkan untuk meningkatkan efisiensi operasional. Dengan proses bisnis yang otomatis dan terintegrasi, Anda dapat mengurangi waktu dan biaya yang dihabiskan untuk tugas-tugas manual, sehingga memungkinkan tim Anda fokus pada tugas yang lebih strategis.", "type": "paragraph"}, {"alt": "Efisiensi Operasional Image", "src": "https://res.cloudinary.com/dcej6w6ct/image/upload/v1720777849/hooore-web-profile/person-smile.png", "full": true, "type": "image"}]}, {"type": "divider", "subtle": false}, {"type": "wrapper_two_column", "items": [{"type": "list", "items": [{"image": {"alt": "Perusahaan Logistik XYZ Image", "src": "https://res.cloudinary.com/dcej6w6ct/image/upload/v1720777849/hooore-web-profile/person-smile.png", "full": true, "type": "image"}, "title": "Perusahaan Logistik XYZ", "description": "Perusahaan Logistik XYZ mengalami peningkatan efisiensi sebesar 30% setelah mengimplementasikan solusi software khusus untuk manajemen rantai pasokan mereka. Dengan fitur-fitur yang disesuaikan, seperti pelacakan pengiriman real-time dan analisis kinerja kendaraan, mereka dapat mengoptimalkan rute pengiriman dan mengurangi biaya operasional.", "titleVariant": "h3"}]}], "title": "Keamanan Data"}]
25db1778-8246-4405-a420-e07bf730715c	3D Tissue Max	Artikel ini menjelaskan pentingnya memiliki solusi software yang disesuaikan dengan kebutuhan bisnis untuk meningkatkan efisiensi dan produktivitas.	3d-tissue-max-2	https://res.cloudinary.com/dcej6w6ct/image/upload/v1720777849/hooore-web-profile/person-smile.png	3D Tissue Max portfolio thumbnail	{Website}	[{"type": "wrapper_one_column", "align": "center", "items": [{"alt": "Portfolio Thumbnail", "src": "https://res.cloudinary.com/dcej6w6ct/image/upload/v1720777849/hooore-web-profile/person-smile.png", "full": true, "type": "image"}]}, {"type": "divider", "subtle": false}, {"type": "wrapper_one_column", "align": "center", "items": [{"type": "identity", "items": [{"title": "Cliet", "content": {"text": "InstaGo", "type": "identity_text"}}, {"title": "Year", "content": {"text": "2024", "type": "identity_text"}}, {"title": "Service", "content": {"type": "identity_list", "items": ["Product Design", "Marketing", "3D Model"], "ordered": false}}, {"title": "Award", "content": {"text": "Best Design SComplex 2024 ", "type": "identity_text"}}]}]}, {"type": "divider", "subtle": false}, {"type": "wrapper_one_column", "align": "center", "items": [{"type": "list", "items": [{"title": "Product Design", "description": "Just take out whatever you don't want. It'll change your entire perspective. In this world, everything can be happy. I will take some magic white, and a little bit of Vandyke brown and a little touch of yellow. Volunteering your time; it pays you and your whole community fantastic dividends. Fluff it up a little and hypnotize it. Take your time. Speed will come later.", "titleVariant": "h2"}, {"title": "Marketing", "description": "You can create the world you want to see and be a part of. You have that power. Trees grow however makes them happy. We'll take a little bit of Van Dyke Brown. You want your tree to have some character. Make it special. If you don't think every day is a good day - try missing a few. You'll see. We'll paint one happy little tree right here. Son of a gun.", "titleVariant": "h2"}, {"title": "3D Model", "description": "Trees get lonely too, so we'll give him a little friend. It's a good way of getting rid of all your anxieties and hostilities. You can create anything that makes you happy. And just raise cain. Now, we're going to fluff this cloud. Sometimes you learn more from your mistakes than you do from your masterpieces. Here's something that's fun.", "titleVariant": "h2"}]}]}, {"type": "divider", "subtle": false}, {"type": "wrapper_one_column", "align": "left", "items": [{"text": "Efisiensi Operasional", "type": "title", "titleVariant": "h2"}, {"text": "Optimalisasi Proses Bisnis", "type": "subtitle"}, {"text": "Solusi software yang disesuaikan dirancang khusus untuk memenuhi kebutuhan unik bisnis Anda. Ini berarti setiap fitur dan fungsi dalam software tersebut dapat dioptimalkan untuk meningkatkan efisiensi operasional. Dengan proses bisnis yang otomatis dan terintegrasi, Anda dapat mengurangi waktu dan biaya yang dihabiskan untuk tugas-tugas manual, sehingga memungkinkan tim Anda fokus pada tugas yang lebih strategis.", "type": "paragraph"}, {"alt": "Efisiensi Operasional Image", "src": "https://res.cloudinary.com/dcej6w6ct/image/upload/v1720777849/hooore-web-profile/person-smile.png", "full": true, "type": "image"}]}, {"type": "divider", "subtle": false}, {"type": "wrapper_two_column", "items": [{"type": "list", "items": [{"image": {"alt": "Perusahaan Logistik XYZ Image", "src": "https://res.cloudinary.com/dcej6w6ct/image/upload/v1720777849/hooore-web-profile/person-smile.png", "full": true, "type": "image"}, "title": "Perusahaan Logistik XYZ", "description": "Perusahaan Logistik XYZ mengalami peningkatan efisiensi sebesar 30% setelah mengimplementasikan solusi software khusus untuk manajemen rantai pasokan mereka. Dengan fitur-fitur yang disesuaikan, seperti pelacakan pengiriman real-time dan analisis kinerja kendaraan, mereka dapat mengoptimalkan rute pengiriman dan mengurangi biaya operasional.", "titleVariant": "h3"}]}], "title": "Keamanan Data"}]
\.


--
-- Data for Name: privacy_policy; Type: TABLE DATA; Schema: public
--

COPY public.privacy_policy (id, title, last_updated, contents) FROM stdin;
125c6f21-852b-49cb-bd49-b9f77028e42e	Privacy Policy	2024-06-30 17:00:00+00	[{"title": "", "contents": [{"paragraph": "Welcome to [href=https://hooore.com](hooore.com) (referred to as \\"we\\", \\"us\\", or \\"our\\"). We are committed to protecting and respecting your privacy. This privacy policy explains how we collect, use, disclose, and safeguard personal information that you provide to us when using our website [href=https://hooore.com]([hooore.com]) and related services."}]}, {"title": "Information We Collect", "contents": [{"list": {"type": "unordered", "items": ["Information you provide to us through registration forms or other interactions on our website, such as name, email address, phone number, etc.", "Information you provide when contacting us, whether through the website, email, or phone.", "Information about your usage of our website, including but not limited to traffic data, location, weblogs, and other resources accessed."]}, "paragraph": "We may collect and process the following information about you:"}]}, {"title": "Use of Information", "contents": [{"list": {"type": "unordered", "items": ["Provide services and information requested by you.", "Manage and operate our website.", "Improve, customize, and tailor our services.", "Send service-related notices or policy updates.", "Respond to your inquiries or requests."]}, "paragraph": "We use the information we collect to:"}]}, {"title": "Disclosure of Information", "contents": [{"paragraph": "We will not sell, share, or rent your personal information to third parties without your consent, except where required by law or in circumstances necessary to protect our legal interests."}]}, {"title": "Security", "contents": [{"paragraph": "We take reasonable security measures to protect your personal information from unauthorized access or use. However, no method of transmitting data over the internet or electronic storage is entirely secure. Therefore, while we strive to protect your personal information, we cannot guarantee the security of data transmitted to us."}]}, {"title": "Your Rights", "contents": [{"paragraph": "You have the right to access, correct, or delete personal information we hold about you. You also have the right to request that we do not send marketing information to you. To exercise these rights or if you have questions or complaints about the collection or use of your personal information, please contact us using the contact information provided at the end of this policy."}]}, {"title": "Changes to Privacy Policy", "contents": [{"paragraph": "We may update this privacy policy periodically to reflect changes in our information practices. Significant changes will be announced on our website alongside the updated privacy policy."}]}, {"title": "Your Consent", "contents": [{"paragraph": "By using our website, you consent to the collection, use, and disclosure of your information as described in this privacy policy."}]}, {"title": "Contact", "contents": [{"paragraph": "If you have any questions about our privacy policy, please contact us via:\\nEmail: [href=mailto:hi@hooore.com](hi@hooore.com)"}]}, {"title": "Thank you :)", "contents": []}]
\.


--
-- Data for Name: service; Type: TABLE DATA; Schema: public
--

COPY public.service (id, title, description, tags, background_color, background_image, contents, thumbnail_url, thumbnail_alt, slug, items, footer_images) FROM stdin;
19bdf761-ef1b-4b35-bc99-5716b181df18	Training & Upskilling	Our Training & Upskilling Services are designed to elevate you or our team’s capabilities, ensuring they stay ahead in the fast-paced world of technology.	{Service}	var(--oranje-600)	https://res.cloudinary.com/dcej6w6ct/image/upload/v1720777760/hooore-web-profile/fruit-basket.png	{"items": [{"items": [{"title": "Needs Assessment: ", "description": "Identifying the training needs and goals of the client."}, {"title": "Curriculum Development", "description": "Creating a tailored curriculum based on identified needs."}, {"title": "Scheduling", "description": "Planning the training sessions and workshops."}], "title": "Discovery & Planning"}, {"items": [{"title": "Workshops & Bootcamps", "description": "Conducting interactive training sessions."}, {"title": "Hands-On Practice", "description": "Providing practical exercises and real-world projects."}, {"title": "Guest Lectures", "description": "Inviting industry experts to share insights and knowledge."}], "title": "Training Delivery"}, {"items": [{"title": "Assments", "description": "Conducting quizzes and assessments to measure progress."}, {"title": "Feedback Gathering", "description": "Gathering feedback from participants to improve the training program."}, {"title": "Certification", "description": "Providing certificates upon successful completion of the course."}], "title": "Evaluation & Feedback"}], "backgoundColor": "var(--oranje-900)"}	https://res.cloudinary.com/dcej6w6ct/image/upload/v1720777497/hooore-web-profile/apple.png	Training & Upskilling Logo	training-upskilling	{"Web Development Bootcamps","UI/UX Design Courses"}	[]
0bb6c987-832a-4415-8732-d3934cbd8038	Software Development	We create robust, scalable, and secure web applications tailored to meet our specific business needs. Our expertise spans across various technologies and frameworks, ensuring our web app is both functional and aesthetically pleasing.	{Service}	var(--green-nyai-500)	https://res.cloudinary.com/dcej6w6ct/image/upload/v1720778175/hooore-web-profile/rocket-launch.png	{"items": [{"items": [{"title": "Initial Consultation", "description": "Meet with the client to understand their business goals and requirements."}, {"title": "Requirement Gathering", "description": "Documenting detailed specifications and user stories."}, {"title": "Project Planning", "description": "Creating a project roadmap with timelines and milestones."}], "title": "Discovery & Planning"}, {"items": [{"title": "UI/UX Design", "description": "Crafting visual designs that align with the client’s brand."}, {"title": "Wireframing", "description": "Developing wireframes to outline the structure and layout."}, {"title": "Technical Design", "description": "Designing architectural systems for robust, scalable, and secure applications."}], "title": "Design & Prototyping"}, {"items": [{"title": "Agile Sprints", "description": "Developing the application in iterative sprints, with regular client reviews."}, {"title": "Backend Development", "description": "Building the server-side logic and database."}, {"title": "Frontend Development", "description": "Creating the client-side interface and interactions."}], "title": "Development"}, {"items": [{"title": "Unit Testing", "description": "Testing individual components for functionality."}, {"title": "Integration Testing", "description": "Ensuring all components work together seamlessly."}, {"title": "User Acceptance Testing (UAT)", "description": "Gathering client feedback and making necessary adjustments."}], "title": "Testing & Quality Assurance"}, {"items": [{"title": "Deployment", "description": "Launching the web app to the production environment."}, {"title": "Post-Launch Support", "description": "Offering ongoing maintenance and updates."}, {"title": "Training", "description": "Providing client training on the new system."}], "title": "Deployment & Feedback"}], "backgoundColor": "var(--green-nyai-800)"}	https://res.cloudinary.com/dcej6w6ct/image/upload/v1720778201/hooore-web-profile/rocket.png	Software Development Logo	software-development	{"Custom Web Applications","Content Management Systems","API Development and Integration"}	[{"alt": "JavaScript Logo", "src": "https://res.cloudinary.com/dcej6w6ct/image/upload/v1720777807/hooore-web-profile/javascript-logo.svg"}, {"alt": "TypeScript Logo", "src": "https://res.cloudinary.com/dcej6w6ct/image/upload/v1720778289/hooore-web-profile/typescript-logo.svg"}, {"alt": "HTML Logo", "src": "https://res.cloudinary.com/dcej6w6ct/image/upload/v1720777791/hooore-web-profile/html-logo.svg"}, {"alt": "CSS Logo", "src": "https://res.cloudinary.com/dcej6w6ct/image/upload/v1720777542/hooore-web-profile/css-logo.svg"}, {"alt": "React.js Logo", "src": "https://res.cloudinary.com/dcej6w6ct/image/upload/v1720777935/hooore-web-profile/reactjs-logo.svg"}, {"alt": "Next.js Logo", "src": "https://res.cloudinary.com/dcej6w6ct/image/upload/v1720777832/hooore-web-profile/nextjs-logo.svg"}, {"alt": "express.js Logo", "src": "https://res.cloudinary.com/dcej6w6ct/image/upload/v1720777657/hooore-web-profile/expressjs-logo.svg"}, {"alt": "PostgreSQL Logo", "src": "https://res.cloudinary.com/dcej6w6ct/image/upload/v1720777886/hooore-web-profile/postgre-logo.svg"}, {"alt": "shadcn/ui Logo", "src": "https://res.cloudinary.com/dcej6w6ct/image/upload/v1720778230/hooore-web-profile/shadcn-ui-logo.svg"}]
5b4b3116-6ff5-4fec-b640-f757f09a2931	UI/UX Design	User experience is at the heart of what we do. Our design team crafts intuitive and engaging interfaces that provide an exceptional user experience, ensuring our app is not only beautiful but also user-friendly.	{Service}	var(--blue-clair-700)	https://res.cloudinary.com/dcej6w6ct/image/upload/v1720777822/hooore-web-profile/magician-rocket.png	{"items": [{"items": [{"title": "Client Consultation", "description": "Understanding the client’s brand, goals, and target audience."}, {"title": "User Research", "description": "Conducting user interviews, surveys, and competitive analysis."}, {"title": "Persona Development", "description": "Creating user personas to guide design decisions."}], "title": "Discovery & Planning"}, {"items": [{"title": "Interaction Story", "description": "Articulating the project objective with the interaction design."}, {"title": "Wireframing", "description": "Outlining the structure and layout of the application."}, {"title": "Low-Fidelity Prototypes", "description": "Building basic interactive prototypes for early feedback."}, {"title": "High-Fidelity Design", "description": "Creating detailed visual designs and interaction."}], "title": "Design & Prototyping"}, {"items": [{"title": "Usability Testing", "description": "Testing the design with real users to identify usability issues."}, {"title": "A/B Testing", "description": "Comparing different design versions to determine the most effective."}, {"title": "Iterative Refinement", "description": "Continuously improving the design based on feedback."}], "title": "Testing & Quality Assurance"}, {"items": [{"title": "Design Handoff", "description": "Preparing design assets and guidelines for developers."}, {"title": "Collaboration with Developers", "description": "Working closely with the development team to ensure design integrity."}, {"title": "Post-Implementation Review", "description": "Reviewing the final product and making necessary adjustments."}], "title": "Implementation & Support"}], "backgoundColor": "var(--blue-clair-900)"}	https://res.cloudinary.com/dcej6w6ct/image/upload/v1720778334/hooore-web-profile/wand.png	UI/UX Design Logo	ui-ux-design	{"Website & App Design","User Research and Analysis","Wireframing and Prototyping"}	[]
\.


--
-- Data for Name: session; Type: TABLE DATA; Schema: public
--

COPY public.session (id, expires_at, user_id) FROM stdin;
\.


--
-- Data for Name: term_and_condition; Type: TABLE DATA; Schema: public
--

COPY public.term_and_condition (id, title, last_updated, contents) FROM stdin;
ae114da1-915e-4b05-8c06-835cf89d2706	Term & Condition	2024-07-12 13:49:01.340522+00	[{"title": "Terms and Conditions of Use", "contents": [{"paragraph": "Welcome to [href=https://hooore.com](hooore.com) These terms and conditions outline the rules and regulations for the use of [href=https://hooore.com](hooore.com)'s website and services."}, {"paragraph": "By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use [href=https://hooore.com](hooore.com) website if you do not accept all of the terms and conditions stated on this page."}, {"paragraph": "The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and any or all Agreements: \\"Client\\", \\"You\\" and \\"Your\\" refers to you, the person accessing this website and accepting the Company's terms and conditions. \\"The Company\\", \\"Ourselves\\", \\"We\\", \\"Our\\" and \\"Us\\", refers to hooore.com. \\"Party\\", \\"Parties\\", or \\"Us\\", refers to both the Client and ourselves, or either the Client or ourselves. All terms refer to the offer, acceptance, and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner, whether by formal meetings of a fixed duration, or any other means, for the express purpose of meeting the Client's needs in respect of provision of the Company's stated services/products, in accordance with and subject to, prevailing law of . Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same."}]}, {"title": "Cookies", "contents": [{"paragraph": "We employ the use of cookies. By using [href=https://hooore.com](hooore.com)'s website, you consent to the use of cookies in accordance with [href=https://hooore.com](hooore.com) privacy policy.\\nMost of the modern-day interactive web sites use cookies to enable us to retrieve user details for each visit. Cookies are used in some areas of our site to enable the functionality of this area and ease of use for those people visiting. Some of our affiliate / advertising partners may also use cookies."}]}, {"title": "License", "contents": [{"list": {"type": "unordered", "items": ["Republish material from [href=https://hooore.com](https://hooore.com)", "Sell, rent or sub-license material from [href=https://hooore.com](https://hooore.com)", "Reproduce, duplicate or copy material from [href=https://hooore.com](https://hooore.com)"]}, "paragraph": "Unless otherwise stated, [href=https://hooore.com](hooore.com) and/or its licensors own the intellectual property rights for all material on [href=https://hooore.com](hooore.com). All intellectual property rights are reserved. You may view and/or print pages from [href=https://hooore.com](https://hooore.com) for your own personal use subject to restrictions set in these terms and conditions.\\nYou must not:"}]}, {"title": "Hyperlinking to our Content", "contents": [{"list": {"type": "unordered", "items": ["Government agencies;", "Search engines;", "News organizations;", "Online directory distributors, when they list us in the directory, may link to our Web site in the same manner as they hyperlink to the Web sites of other listed businesses; and", "Systemwide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site."]}, "paragraph": "The following organizations may link to our Web site without prior written approval:"}, {"paragraph": "These organizations may link to our home page, to publications or to other Web site information so long as the link: (a) is not in any way misleading; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party's site."}, {"paragraph": "If you are among the organizations listed in paragraph 2 above and are interested in linking to our website, you must notify us by sending an e-mail to hooore.com. Please include your name, your organization name, contact information (such as a phone number and/or e-mail address) as well as the URL of your site, a list of any URLs from which you intend to link to our Web site, and a list of the URL(s) on our site to which you would like to link. Allow 2-3 weeks for a response."}, {"paragraph": "Approved organizations may hyperlink to our Web site as follows:\\nBy use of our corporate name; or by use of the uniform resource locator (Web address) being linked to; or By use of any other description of our Web site or material being linked to that makes sense within the context and format of content on the linking party's site. No use of hooore.com's logo or other artwork will be allowed for linking absent a trademark license agreement."}]}, {"title": "Reservation of Rights", "contents": [{"paragraph": "We reserve the right at any time and in its sole discretion to request that you remove all links or any particular link to our Web site. You agree to immediately remove all links to our Web site upon such request. We also reserve the right to amend these terms and conditions and its linking policy at any time. By continuing to link to our Web site, you agree to be bound to and abide by these linking terms and conditions."}]}, {"title": "Removal of links from our website", "contents": [{"paragraph": "If you find any link on our Web site or any linked Web site objectionable for any reason, you may contact us about this. We will consider requests to remove links but will have no obligation to do so or to respond directly to you."}, {"paragraph": "Whilst we endeavor to ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we commit to ensuring that the website remains available or that the material on the website is kept up to date."}]}, {"title": "Content Liability", "contents": [{"paragraph": "We shall have no responsibility or liability for any content appearing on your Web site. You agree to indemnify and defend us against all claims arising out of or based upon your Website. No link(s) may appear on any page on your Web site or within any context containing content or materials that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights."}]}, {"title": "Disclaimer", "contents": [{"list": {"type": "unordered", "items": ["limit or exclude our or your liability for death or personal injury resulting from negligence;", "limit or exclude our or your liability for fraud or fraudulent misrepresentation;", "limit any of our or your liabilities in any way that is not permitted under applicable law; or", "exclude any of our or your liabilities that may not be excluded under applicable law."]}, "paragraph": "To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website (including, without limitation, any warranties implied by law in respect of satisfactory quality, fitness for purpose and/or the use of reasonable care and skill). Nothing in this disclaimer will be:"}, {"paragraph": "The limitations and exclusions of liability set out in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer or in relation to the subject matter of this disclaimer, including liabilities arising in contract, in tort (including negligence) and for breach of statutory duty."}, {"paragraph": "To the extent that the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature."}]}]
\.


--
-- Data for Name: user; Type: TABLE DATA; Schema: public
--

COPY public."user" (id, username, password_hash) FROM stdin;
\.


--
-- Name: migrations_migration_id_seq; Type: SEQUENCE SET; Schema: public
--

SELECT pg_catalog.setval('public.migrations_migration_id_seq', 1, false);


--
-- Name: blog blog_pkey; Type: CONSTRAINT; Schema: public
--

ALTER TABLE ONLY public.blog
    ADD CONSTRAINT blog_pkey PRIMARY KEY (id);


--
-- Name: faq faq_pkey; Type: CONSTRAINT; Schema: public
--

ALTER TABLE ONLY public.faq
    ADD CONSTRAINT faq_pkey PRIMARY KEY (id);


--
-- Name: migrations migrations_pkey; Type: CONSTRAINT; Schema: public
--

ALTER TABLE ONLY public.migrations
    ADD CONSTRAINT migrations_pkey PRIMARY KEY (migration_id);


--
-- Name: portfolio portfolio_pkey; Type: CONSTRAINT; Schema: public
--

ALTER TABLE ONLY public.portfolio
    ADD CONSTRAINT portfolio_pkey PRIMARY KEY (id);


--
-- Name: privacy_policy privacy_policy_pkey; Type: CONSTRAINT; Schema: public
--

ALTER TABLE ONLY public.privacy_policy
    ADD CONSTRAINT privacy_policy_pkey PRIMARY KEY (id);


--
-- Name: service service_pkey; Type: CONSTRAINT; Schema: public
--

ALTER TABLE ONLY public.service
    ADD CONSTRAINT service_pkey PRIMARY KEY (id);


--
-- Name: session session_pkey; Type: CONSTRAINT; Schema: public
--

ALTER TABLE ONLY public.session
    ADD CONSTRAINT session_pkey PRIMARY KEY (id);


--
-- Name: term_and_condition term_and_condition_pkey; Type: CONSTRAINT; Schema: public
--

ALTER TABLE ONLY public.term_and_condition
    ADD CONSTRAINT term_and_condition_pkey PRIMARY KEY (id);


--
-- Name: user user_pkey; Type: CONSTRAINT; Schema: public
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);


--
-- Name: user user_username_key; Type: CONSTRAINT; Schema: public
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_username_key UNIQUE (username);


--
-- Name: session session_user_id_fkey; Type: FK CONSTRAINT; Schema: public
--

ALTER TABLE ONLY public.session
    ADD CONSTRAINT session_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."user"(id);


--
-- Name: DEFAULT PRIVILEGES FOR SEQUENCES; Type: DEFAULT ACL; Schema: public; Owner: cloud_admin
--


--
-- Name: DEFAULT PRIVILEGES FOR TABLES; Type: DEFAULT ACL; Schema: public; Owner: cloud_admin
--


--
-- PostgreSQL database dump complete
--

