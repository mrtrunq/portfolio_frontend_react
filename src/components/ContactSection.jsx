import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Twitch, Send } from "lucide-react";
import { cn } from "../lib/ultis";
import { useToast } from "../hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsSubmitting(true);

        setTimeout(() => {
            toast({
                title: "Message sent!",
                description: "Cảm ơn tin nhắn của bạn. Tôi sẽ sớm liên lạc lại với bạn",
            });
            setIsSubmitting(false);
        }, 1500);
    };

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30 ">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Liên <span className="text-primary">Lạc</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Bạn có dự án hoặc muốn hợp tác? Hãy thoải mái liên hệ. Tôi luôn sẵn sàng thảo luận về các cơ hội mới</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">Thông Tin Liên Hệ</h3>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Email</h4>
                                    <a href="mailto:mrtrunq@email.com" className="text-muted-foreground hover:text-primary transition-colors">
                                        mrtrunq@email.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div className="">
                                    <h4 className="font-medium">Phone</h4>
                                    <a href="tel:+84988235381" className="text-muted-foreground hover:text-primary transition-colors">
                                        0988 235 381
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div className="">
                                    <h4 className="font-medium">Location</h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors">Hạ Long, Quảng Ninh</a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 ">
                            <h4 className="font-medium mb-4">Kết Nối Với Tôi</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="#" target="_blank">
                                    <Linkedin />
                                </a>
                                <a href="#" target="_blank">
                                    <Twitter />
                                </a>
                                <a href="#" target="_blank">
                                    <Instagram />
                                </a>
                                <a href="#" target="_blank">
                                    <Twitch />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-lg shadow-xs" onSubmit={handleSubmit}>
                        <h3 className="text-xl font-semibold mb-6">Gửi tin nhắn</h3>
                        <form action="" className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">
                                    Tên Của Bạn
                                </label>
                                <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="Tên…" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">
                                    Email Của Bạn
                                </label>
                                <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="example@email.com" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">
                                    Tin Nhắn Của Bạn
                                </label>
                                <textarea id="message" name="message" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none" placeholder="Xin chào, tôi muốn nói chuyện về…" />
                            </div>
                            <button type="submit" disabled={isSubmitting} className={cn("cosmic-button w-full flex items-center justify-center gap-2")}>
                                {isSubmitting ? "Đang Gửi..." : "Gửi Tin Nhắn"}
                                <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
